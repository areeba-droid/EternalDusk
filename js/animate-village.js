
//image, sound and text array for the introduction page
const images = [
  {src:"images/village2/3.1.png", text:"Colin – Look! There’s another village! Maybe we can stop there for a bit.", sound:"sound1.mp3"},
  {src:"images/village2/3.2.png", text:"Text Here.", sound:"sound2.mp3"},
  {src:"images/village2/3.3.png", text:"Text Here.", sound:"sound3.mp3"},
  {src:"images/village2/3.4.png", text:"Text Here.", sound:"sound4.mp3"},
  {src:"images/village2/3.5.png", text:"Text Here.", sound:"sound5.mp3"},
  {src:"images/village2/3.6.png", text:"Text Here.", sound:"sound6.mp3"},
  {src:"images/village2/3.7.png", text:"Text Here.", sound:"sound7.mp3"},
  {src:"images/village2/3.8.png", text:"Text Here.", sound:"sound8.mp3"}
];

let currentIndex = 0;

// Get references to the DOM elements
const imageElement = document.getElementById("image");
const textElement = document.getElementById("text");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");

function playSound(soundPath) {
  const audio = new Audio(soundPath); // Create a new audio object
  audio.play(); // Play the sound
}

function updateUI() {
  // Update the image
  imageElement.src = images[currentIndex].src;
  textElement.textContent = images[currentIndex].text; //Update the text
  playSound(images[currentIndex].sound); // Play the corresponding sound

  textElement.classList.remove("text"); // Remove animation
  void textElement.offsetWidth; // Trigger reflow (reset the animation)
  textElement.classList.add("text"); // Re-add the animation

  // Show or hide the "Back" button
  // the ? is a short written form of an if-else statement like codition ? valueIfTrue : valueIfFalse;
  // backButton.style.display = currentIndex === 0 ? "none" : "inline-block";

  // Update the "Next" button text
  nextButton.textContent = currentIndex === images.length - 1 ? "Finish" : "Next >";
}


nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    // Move to the next image
    currentIndex++;
    updateUI();
  } else {
    // Redirect to another page when "Finish" is clicked
    window.location.href = "village2-play.html"; // Change to your target page
  }
});

// Event listener for the "Back" button
backButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    // Move to the previous image
    currentIndex--;
    updateUI();
  }
});

// Initial UI setup
updateUI();
