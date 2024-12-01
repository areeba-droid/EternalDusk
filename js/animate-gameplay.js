
//image, sound and text array for the introduction page
// const images = [
//   {src:'url("images/intro/1.1.png")', text:"In the Home Village", sound:"sound1.mp3"},
//   {src:'url("images/forest1/2.1.png")', text:"In the Forest", sound:"sound2.mp3"},
//   {src:'url("images/village2/3.1.png")', text:"In the Village", sound:"sound3.mp3"},
//   {src:'url("images/forest2/4.1.png")', text:"In the Dark Forest", sound:"sound4.mp3"},
//   {src:'url("images/ending/5.1.png")', text:"Ending", sound:"sound5.mp3"},
// ];

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
  document.body.style.backgroundImage = 'url("images/intro/1.1.png")';
  // textElement.textContent = images[currentIndex].text; //Update the text
  // playSound(images[currentIndex].sound); // Play the corresponding sound
}

// Initial UI setup
updateUI();
