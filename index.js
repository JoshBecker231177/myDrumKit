
// Detecting button click with mouse

const theDrums = document.querySelectorAll(".drum");

for (i = 0; i < theDrums.length; i++) {

  theDrums[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  })
}

// Detecting key pressed on keyboard

document.addEventListener("keydown", function(event) {

  const keyPressed = event.key;

  makeSound(keyPressed);

  buttonAnimation(keyPressed);

})



function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(key);

  }
}

function buttonAnimation(currentKey) {

  const activeButton = document.querySelector(`.${currentKey}`);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
