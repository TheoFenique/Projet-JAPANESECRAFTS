let YScrollPosition//Parallax function for the Shrine.
let parallaxTarget = document.querySelector('#shrine')

window.addEventListener("DOMContentLoaded", scrollLoop, false)

function scrollLoop (e) {
  YScrollPosition = window.scrollY

  setTranslate(YScrollPosition, parallaxTarget)
  requestAnimationFrame(scrollLoop)
}

function setTranslate(yPos, el) {
  el.style.transform = "translate3d(-50%,"  + yPos * 0.3 +"px, 0)"
}
