/* The bundled remark predates the `exclude: true` slide property, so drop
   those slides from the source before remark.create() parses it. */
(function stripExcludedSlides(){
  const source=document.getElementById("source");
  if(!source)return;
  const lines=source.textContent.split(/\r?\n/);
  const slides=[[]];
  let inFence=false;
  lines.forEach(line=>{
    if(/^\s*```/.test(line))inFence=!inFence;
    if(!inFence&&/^---\s*$/.test(line)){slides.push([]);return}
    slides[slides.length-1].push(line);
  });
  const isExcluded=slide=>{
    for(const line of slide){
      if(!line.trim())continue;
      const prop=line.match(/^(\w+)\s*:\s*(.*?)\s*$/);
      if(!prop)return false;
      if(prop[1]==="exclude"&&prop[2]==="true")return true;
    }
    return false;
  };
  const kept=slides.filter(slide=>!isExcluded(slide));
  if(kept.length!==slides.length)source.textContent=kept.map(slide=>slide.join("\n")).join("\n---\n");
})();
/* Fenced code nested inside a `.class[ ... ]` block is usually indented to
   match the markup; strip the fence's own indent so the code starts at col 0. */
(function dedentCodeFences(){
  const source=document.getElementById("source");
  if(!source)return;
  const original=source.textContent;
  let indent=null;
  const lines=original.split(/\r?\n/).map(line=>{
    const fence=line.match(/^(\s*)```/);
    if(fence){
      indent=indent===null?fence[1]:null;
      return line.trimStart();
    }
    if(indent&&line.startsWith(indent))return line.slice(indent.length);
    return line;
  });
  const result=lines.join("\n");
  if(result!==original)source.textContent=result;
})();
function getViewportRatio(){return(window.innerWidth||document.documentElement.clientWidth||16)+":"+(window.innerHeight||document.documentElement.clientHeight||9)}window.slideshow=remark.create({ratio:getViewportRatio(),navigation:{scroll:!1}});
/* Record each code line's leading-space count so wrapped continuations
   can hang under the code instead of restarting at column 0. */
document.querySelectorAll(".remark-code-line").forEach(line=>{
  const lead=line.textContent.match(/^ */)[0].length;
  if(lead)line.style.setProperty("--code-indent",lead);
});
/* Add a copy button to every fenced code block. */
(function addCodeCopyButtons(){
  const copyText=text=>{
    if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(text);
    return new Promise((resolve,reject)=>{
      const area=document.createElement("textarea");
      area.value=text;
      area.style.position="fixed";
      area.style.opacity="0";
      document.body.appendChild(area);
      area.select();
      const ok=document.execCommand("copy");
      area.remove();
      ok?resolve():reject(new Error("copy failed"));
    });
  };
  document.querySelectorAll(".remark-slide-content pre").forEach(pre=>{
    const code=pre.querySelector(".remark-code");
    if(!code||pre.querySelector(".code-copy"))return;
    const button=document.createElement("button");
    button.type="button";
    button.className="code-copy";
    button.textContent="Copy";
    button.setAttribute("aria-label","Copy code to clipboard");
    button.addEventListener("click",event=>{
      event.stopPropagation();
      const lines=code.querySelectorAll(".remark-code-line");
      const text=lines.length?Array.from(lines,line=>line.textContent).join("\n"):code.textContent;
      copyText(text).then(()=>{button.textContent="Copied!"},()=>{button.textContent="Failed"})
        .finally(()=>{setTimeout(()=>{button.textContent="Copy"},1500)});
    });
    pre.appendChild(button);
  });
})();