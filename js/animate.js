
//image, sound and text array for the introduction page
const images = [
  {src:"images/intro/1.1.png", text:" It was a peaceful night when suddenly hoards of Vampire Minions ambushed the village of Greenhollow, viciously attacking villagers and destroying buildings.", sound:"sound1.mp3"},
  {src:"images/intro/1.2.png", text:"Chaos erupted as villagers were screaming in panic while flames licked the sides of houses, illuminating the darkness.", sound:"sound2.mp3"},
  {src:"images/intro/1.3.png", text:"Faye – Stay away! I won’t let you hurt anyone!", sound:"sound3.mp3"},
  {src:"images/intro/1.4.png", text:" Colin – Get back!", sound:"sound4.mp3"},
  {src:"images/intro/1.5.png", text:"Gobba – It seems that we have company…", sound:"sound5.mp3"},
  {src:"images/intro/1.6.png", text:"Faye, Colin and Gobba knew that this wasn’t a random attack. It was deliberate from the Vampire Lord, and they were determined to put a stop to him and his minions.", sound:"sound6.mp3"},
  {src:"images/intro/1.1.png", text:"How will the group fair in their attempt to seek answers and justice?", sound:"sound7.mp3"}
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
    window.location.href = "game-play.html"; // Change to your target page
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
