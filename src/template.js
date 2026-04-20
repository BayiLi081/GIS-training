// Match the slideshow canvas to the current viewport instead of a fixed 16:9 frame.
function getViewportRatio() {
  var width = window.innerWidth || document.documentElement.clientWidth || 16;
  var height = window.innerHeight || document.documentElement.clientHeight || 9;

  return width + ":" + height;
}

window.slideshow = remark.create({
  ratio: getViewportRatio(),
  navigation: {
    scroll: false
  }
});
