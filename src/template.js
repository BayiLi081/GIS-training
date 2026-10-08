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
function getViewportRatio(){return(window.innerWidth||document.documentElement.clientWidth||16)+":"+(window.innerHeight||document.documentElement.clientHeight||9)}window.slideshow=remark.create({ratio:getViewportRatio(),navigation:{scroll:!1}});