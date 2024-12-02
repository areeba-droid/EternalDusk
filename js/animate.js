
// Image, sound, and text array for the introduction page
const images = [
  {src: 'url("images/intro/1.1.png")', text: "It was a peaceful night when suddenly hoards of Vampire Minions ambushed the village of Greenhollow, viciously attacking villagers and destroying buildings.", sound: "sounds/fire.mp3"},
  {src: 'url("images/intro/1.2.png")', text: "Chaos erupted as villagers were screaming in panic while flames licked the sides of houses, illuminating the darkness.", sound: "sounds/running.mp3"},
  {src: 'url("images/intro/1.3.png")', text: "Faye – Stay away! I won’t let you hurt anyone!", sound: "sounds/spell.mp3"},
  {src: 'url("images/intro/1.4.png")', text: "Colin – Get back!", sound: "sounds/sword.mp3"},
  {src: 'url("images/intro/1.5.png")', text: "Gobba – It seems that we have company…", sound: "sounds/walking.mp3"},
  {src: 'url("images/intro/1.6.png")', text: "Faye, Colin and Gobba knew that this wasn’t a random attack. It was deliberate from the Vampire Lord, and they were determined to put a stop to him and his minions.", sound: "sounds/sound6.mp3"},
  {src: 'url("images/intro/1.1.png")', text: "How will the group fair in their attempt to seek answers and justice?", sound: "sounds/fire.mp3"}
];

let currentIndex = 0;
let muteState = parseInt(localStorage.getItem('muteState')) || 0; // Load mute state from localStorage
let audio = new Audio(); // Create a single persistent audio object
let globalAudio = new Audio();
globalAudio.src = "sounds/vampire.mp3";
globalAudio.loop = true;

// Get references to the DOM elements
// const imageElement = document.getElementById("image");
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
  document.body.style.backgroundImage = images[currentIndex].src;
  // imageElement.src = ;
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
    window.location.href = "game-play.html"; // Change to your target page
  }
});

// Handle the "Back" button click
backButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateUI();
  } else {
    window.location.href = "index.html";
  }
});

// Initialize the UI
updateUI();
