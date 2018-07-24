/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  // call back with parameter is not actually being invoked
  // setimout takes in a call back and a integer
  setTimeout(() => fadeOut(div), range)
}

function delayedFadeIn(div, range) {
  setTimeout(()=> fadeIn(div), range)
}

function fadeAllOut(el, group) {
  //group is passed in, must iterate over group and change the transitioning effect for the desired elements
  group.forEach(div => {

    if(el === div){
      // check if element matches our div, which gets passed in to delayedFadeIn
      //pull global variable from config.js, changed the miliseconds to our choosing
      // if clicked we want the longest range else, shortrange for all of them
      delayedFadeOut(div, LONGRANGE)
    } else {
      delayedFadeOut(div, SHORTRANGE)
    }
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    if(el === div){
      delayedFadeIn(div, SHORTRANGE)
    } else {
      delayedFadeIn(div, LONGRANGE)
    }
  })
}
