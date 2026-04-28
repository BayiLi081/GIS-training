const NODE_COLORS = { policy: "#f2a74b", activity: "#6cb1f1", actor: "#63b87d" };
const EDGE_COLORS = { semantic: "#7f8aa3", nesting: "#2f7a50", dim: "#d4d8de" };
const ETYPES = ["PP", "AA", "RR", "PA", "AR"];
const ETYPE_LABELS = { PP: "policy-policy", AA: "activity-activity", RR: "actor-actor", PA: "policy-activity", AR: "activity-actor" };
let network, nodesDS, edgesDS;
let rawNodes = [], rawEdges = [];
let activeEtypes = new Set(ETYPES);
const statusEl = document.getElementById("status");
const cityLabelEl = document.getElementById("cityLabel");
const actorAEl = document.getElementById("actorA");
const actorBEl = document.getElementById("actorB");
const pairModeEl = document.getElementById("pairMode");
const etypeFilterEls = Array.from(document.querySelectorAll("input[name='etypeFilter']"));
const snippetTitleEl = document.getElementById("snippetTitle");
const snippetHintEl = document.getElementById("snippetHint");
const snippetListEl = document.getElementById("snippetList");
const edgeColor = (t) => (t === "PA" || t === "AR") ? EDGE_COLORS.nesting : EDGE_COLORS.semantic;
const nodeStyle = (n) => ({ id: n.id, label: n.label, title: `${n.ntype}\n${n.label}`, shape: n.ntype === "actor" ? "dot" : "box", size: n.ntype === "actor" ? 18 : 14, color: { background: NODE_COLORS[n.ntype] || "#bcc7bf", border: "#2e3f36" }, font: { color: "#1f2b25", size: 13 }, borderWidth: 1 });
const edgeStyle = (e) => ({ id: e.id, from: e.source, to: e.target, label: e.rel && e.rel.length <= 16 ? e.rel : "", title: `${ETYPE_LABELS[e.etype] || e.etype} | ${e.rel || "(none)"}`, arrows: "to", color: { color: edgeColor(e.etype), highlight: "#cc3e2a", opacity: 0.8 }, width: (e.etype === "PA" || e.etype === "AR") ? 2.5 : 1.5, dashes: (e.etype === "PA" || e.etype === "AR") });

function setStatus(msg, err=false){ statusEl.textContent = msg; statusEl.style.color = err ? "#8f1a1a" : "#2b3b33"; }
function fillActorSelect(el, actors){ el.innerHTML = '<option value="">-- Select actor --</option>'; actors.forEach(a => { const o = document.createElement("option"); o.value = a.id; o.textContent = `${a.label} (${a.id})`; el.appendChild(o); }); }
function isEdgeEnabled(e){ return activeEtypes.has(e.etype); }
function selectedEtypesLabel(){ if(activeEtypes.size===ETYPES.length) return "all"; if(activeEtypes.size===0) return "none"; return [...activeEtypes].map(e => ETYPE_LABELS[e] || e).join(", "); }
function escapeHtml(text){ return String(text).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"); }
function clearSnippets(reason){ snippetTitleEl.textContent = "Original Text Snippets"; snippetHintEl.textContent = reason || "Run a query to view supporting text snippets from matched relations."; snippetListEl.innerHTML = '<p class="snippet-empty">No snippets to display yet.</p>'; }
function nodeTypeById(id){ const n = rawNodes.find(x => x.id === id); return n ? n.ntype : ""; }
function nodeLabelById(id){ const n = rawNodes.find(x => x.id === id); return n && n.label ? n.label : id; }
function normalizeSnippetText(text){ return String(text || "").replace(/\s+/g, " ").trim(); }
function collectUniqueSnippetEdges(edgeIds){ const idSet = new Set(edgeIds); const seen = new Set(); const items = []; rawEdges.filter(e => idSet.has(e.id)).forEach(e => { const raw = (e.evidence || "").trim(); if(!raw) return; const norm = normalizeSnippetText(raw); if(!norm || seen.has(norm)) return; seen.add(norm); items.push({ edge: e, text: raw }); }); return items; }
function actorContext(actorId){ const activityIds = new Set(); const policyIds = new Set(); const contextEdgeIds = new Set(); rawEdges.filter(isEdgeEnabled).forEach(e => { if(e.etype === "AR" && (e.source===actorId || e.target===actorId)){ contextEdgeIds.add(e.id); const other = e.source===actorId ? e.target : e.source; if(nodeTypeById(other)==="activity") activityIds.add(other); } }); rawEdges.filter(isEdgeEnabled).forEach(e => { if(e.etype !== "PA") return; const srcIsAct = activityIds.has(e.source); const dstIsAct = activityIds.has(e.target); if(!srcIsAct && !dstIsAct) return; contextEdgeIds.add(e.id); const other = srcIsAct ? e.target : e.source; if(nodeTypeById(other)==="policy") policyIds.add(other); }); return { activityIds, policyIds, contextEdgeIds }; }
function actorPolicySnippetEdgeIds(actorId){ const ctx = actorContext(actorId); if(!ctx.policyIds.size) return []; return rawEdges.filter(e => isEdgeEnabled(e) && e.etype === "PP" && (ctx.policyIds.has(e.source) || ctx.policyIds.has(e.target))).map(e => e.id); }
function renderSnippets(edgeIds, title){ const items = collectUniqueSnippetEdges(edgeIds); snippetTitleEl.textContent = title || `Original Text Snippets (${items.length})`; if(!items.length){ clearSnippets("No extracted snippets found for this query."); return; } snippetHintEl.textContent = "Showing unique extracted snippets only (empty/duplicate snippets are hidden)."; snippetListEl.innerHTML = items.map((x, i) => `<article class="snippet-item"><p class="snippet-meta">#${i + 1} | ${escapeHtml(ETYPE_LABELS[x.edge.etype] || x.edge.etype)} | ${escapeHtml(nodeLabelById(x.edge.source))} -> ${escapeHtml(nodeLabelById(x.edge.target))}</p><p class="snippet-text">${escapeHtml(x.text)}</p></article>`).join(""); }
function syncEtypes(){ const s = new Set(); etypeFilterEls.forEach(el => { if(el.checked) s.add(el.value); }); activeEtypes = s; }
function resetStyles(){ nodesDS.update(rawNodes.map(n => ({...nodeStyle(n), hidden:false}))); edgesDS.update(rawEdges.map(e => ({...edgeStyle(e), hidden: !isEdgeEnabled(e)}))); }
function focus(nodes){ if(!nodes.length) return; network.fit({ nodes, animation:{duration:500, easingFunction:"easeInOutCubic"} }); }
function highlight(nodeIds, edgeIds, msg){ const bn = new Set(nodeIds), be = new Set(edgeIds); nodesDS.update(rawNodes.map(n => bn.has(n.id) ? ({...nodeStyle(n), hidden:false}) : ({...nodeStyle(n), color:{background:"#eceff2", border:"#c9cfd6"}, font:{color:"#9ba4ad", size:11}}))); edgesDS.update(rawEdges.map(e => { const base = edgeStyle(e); if(!isEdgeEnabled(e)) return {...base, hidden:true}; if(be.has(e.id)) return {...base, hidden:false, width:Math.max(base.width||1.5,2.8)}; return {...base, color:{color:EDGE_COLORS.dim, opacity:0.35}, width:0.8, label:""}; })); setStatus(msg); focus([...bn]); }

function querySingle(actorId){ if(!actorId){ setStatus("Please select an actor first.", true); return; } const ctx = actorContext(actorId); const nodeIds = new Set([actorId, ...ctx.activityIds, ...ctx.policyIds]); const edgeIds = new Set(ctx.contextEdgeIds); highlight(nodeIds, edgeIds, `Actor context query: highlighted ${nodeIds.size} nodes and ${edgeIds.size} actor/activity/policy context edges around ${actorId}.`); const policyEdgeIds = actorPolicySnippetEdgeIds(actorId); renderSnippets(policyEdgeIds, `Original Text Snippets (Policy-linked, ${collectUniqueSnippetEdges(policyEdgeIds).length})`); }
function adjacency(mode){ const adj = new Map(rawNodes.map(n => [n.id, []])); rawEdges.filter(isEdgeEnabled).forEach(e => { if(!adj.has(e.source)) adj.set(e.source, []); adj.get(e.source).push({to:e.target, edgeId:e.id}); if(mode==="undirected"){ if(!adj.has(e.target)) adj.set(e.target, []); adj.get(e.target).push({to:e.source, edgeId:e.id}); } }); return adj; }
function findPath(a,b,mode){ const adj = adjacency(mode), q=[a], vis=new Set([a]), par=new Map(); while(q.length){ const cur=q.shift(); if(cur===b) break; (adj.get(cur)||[]).forEach(it => { if(!vis.has(it.to)){ vis.add(it.to); par.set(it.to,{prev:cur,edgeId:it.edgeId}); q.push(it.to); } }); } if(!vis.has(b)) return null; const pathNodes=[b], pathEdges=[]; let cur=b; while(cur!==a){ const p=par.get(cur); if(!p) return null; pathEdges.push(p.edgeId); pathNodes.push(p.prev); cur=p.prev; } pathNodes.reverse(); pathEdges.reverse(); return {pathNodes, pathEdges}; }
function queryPair(a,b){ if(!a||!b){ setStatus("Please select both Actor A and Actor B.", true); return; } if(a===b){ querySingle(a); return; } const mode = pairModeEl && pairModeEl.value==="undirected" ? "undirected" : "directed"; if(activeEtypes.size===0){ setStatus("Relation not found: no edge types are enabled in filters.", true); clearSnippets("No snippets available because all edge type filters are off."); return; } const r = findPath(a,b,mode); if(!r){ setStatus(`Relation not found: no ${mode} path from ${a} to ${b} under current edge filters.`, true); clearSnippets("No snippets found because no path matched the current query and filters."); return; } const arrow = mode==="undirected" ? " - " : " -> "; highlight(new Set(r.pathNodes), new Set(r.pathEdges), `Pair query (${mode}): found path ${r.pathNodes.join(arrow)}`); renderSnippets(r.pathEdges, `Original Text Snippets (${r.pathEdges.length})`); }

function init(){
  const data = window.QUERY_GRAPH_DATA;
  cityLabelEl.textContent = `City: ${data.city_id}`;
  rawNodes = data.nodes || []; rawEdges = data.edges || [];
  nodesDS = new vis.DataSet(rawNodes.map(nodeStyle));
  edgesDS = new vis.DataSet(rawEdges.map(edgeStyle));
  network = new vis.Network(document.getElementById("network"), {nodes:nodesDS, edges:edgesDS}, {interaction:{hover:true,navigationButtons:true,keyboard:true}, physics:{stabilization:{enabled:true,iterations:400}, barnesHut:{gravitationalConstant:-4200,springLength:125,springConstant:0.035}}, edges:{smooth:true, arrows:{to:{enabled:true,scaleFactor:0.8}}}});
  const actors = data.actors || rawNodes.filter(n => n.ntype === "actor");
  fillActorSelect(actorAEl, actors);
  fillActorSelect(actorBEl, actors);
  document.getElementById("querySingle").addEventListener("click", () => querySingle(actorAEl.value));
  document.getElementById("queryPair").addEventListener("click", () => queryPair(actorAEl.value, actorBEl.value));
  document.getElementById("clearQuery").addEventListener("click", () => { resetStyles(); network.fit({animation:{duration:450,easingFunction:"easeInOutQuad"}}); setStatus("Reset complete: showing full graph."); clearSnippets(); });
  etypeFilterEls.forEach(el => el.addEventListener("change", () => { syncEtypes(); resetStyles(); setStatus(`Edge filter updated: ${selectedEtypesLabel()}.`); }));
  syncEtypes(); resetStyles();
  clearSnippets();
  setStatus(`Loaded ${rawNodes.length} nodes and ${rawEdges.length} edges. Active edge types: ${selectedEtypesLabel()}.`);
}

init();
