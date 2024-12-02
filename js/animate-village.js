
//image, sound and text array for the introduction page
const images = [
  {src:"images/village2/3.1.png", text:"Colin – Look! There’s another village! Maybe we can stop there for a bit.", sound:"sounds/quiet.mp3"},
  {src:"images/village2/3.2.png", text:"Text Here.", sound:"sounds/quiet.mp3"},
  {src:"images/village2/3.3.png", text:"Text Here.", sound:"sounds/quiet.mp3"},
  {src:"images/village2/3.4.png", text:"Text Here.", sound:"sounds/quiet.mp3"},
  {src:"images/village2/3.5.png", text:"Text Here.", sound:"sounds/wind.mp3"},
  {src:"images/village2/3.6.png", text:"Text Here.", sound:"sounds/wind.mp3"},
  {src:"images/village2/3.7.png", text:"Text Here.", sound:"sound7.mp3"},
  {src:"images/village2/3.8.png", text:"Text Here.", sound:"sound8.mp3"}
];

let currentIndex = 0;
let muteState = parseInt(localStorage.getItem('muteState')) || 0; // Load mute state from localStorage
let audio = new Audio(); // Create a single persistent audio object
let globalAudio = new Audio();
globalAudio.src = "sounds/village.mp3";
globalAudio.loop = true;

// Get references to the DOM elements
const imageElement = document.getElementById("image");
const textElement = document.getElementById("text");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const muteButton = document.getElementById("mute-button");

function playSound(soundPath) {
  if (muteState === 1) {
    audio.src = soundPath; // Set the sound file
    audio.loop = true;
    audio.play(); // Play the sound
    globalAudio.play();
  }
}

function updateUI() {
  // Update the image and text
  imageElement.src = images[currentIndex].src;
  textElement.textContent = images[currentIndex].text;

  // Play the corresponding sound
  if (muteState === 1) {
    audio.src = images[currentIndex].sound;
    audio.play();
    globalAudio.play();
  }

  textElement.classList.remove("text"); // Remove animation
  void textElement.offsetWidth; // Trigger reflow (reset the animation)
  textElement.classList.add("text"); // Re-add the animation

  // Update the "Next" button text
  nextButton.textContent = currentIndex === images.length - 1 ? "Finish" : "Next >";
  muteButton.textContent = muteState === 1 ? "Mute" : "Unmute";
}

// Mute/unmute functionality
muteButton.addEventListener("click", () => {
  if (muteState === 1) {
    muteState = 0;
    localStorage.setItem('muteState', muteState); // Save state to localStorage
    audio.pause(); // Stop audio
    globalAudio.pause();
    muteButton.textContent = "Unmute";
  } else {
    muteState = 1;
    localStorage.setItem('muteState', muteState); // Save state to localStorage
    audio.play(); // Resume audio
    globalAudio.play();
    muteButton.textContent = "Mute";
  }
});

// Handle the "Next" button click
nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateUI();
  } else {
    // Redirect to another page when "Finish" is clicked
    window.location.href = "village2-play.html"; // Change to your target page
  }
});

// Handle the "Back" button click
backButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateUI();
  } else {
    window.location.href = "forest-play.html";
  }
});

// Initialize the UI
updateUI();
