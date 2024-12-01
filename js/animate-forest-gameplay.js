
// Get references to the DOM elements
// const imageElement = document.getElementById("image");
const textElement = document.getElementById("text");
const nextButton = document.getElementById("next-button");
// const backButton = document.getElementById("back-button");

function playSound(soundPath) {
  const audio = new Audio(soundPath); // Create a new audio object
  audio.play(); // Play the sound
}

function updateUI() {
  // Update the image
  document.body.style.backgroundImage = 'url("images/forest1/2.4.png")';
  // textElement.textContent = images[currentIndex].text; //Update the text
  // playSound(images[currentIndex].sound); // Play the corresponding sound
}

// Initial UI setup
updateUI();
