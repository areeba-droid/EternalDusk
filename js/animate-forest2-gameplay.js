
  let muteState = parseInt(localStorage.getItem('muteState')) || 0; // Load mute state from localStorage
  let globalAudio = new Audio();
  globalAudio.src = "sounds/dark-forest.mp3";
  globalAudio.loop = true;

  // Get references to the DOM elements
  // const imageElement = document.getElementById("image");
  const textElement = document.getElementById("text");
  const nextButton = document.getElementById("next-button");
  const muteButton = document.getElementById("mute-button");
  // const backButton = document.getElementById("back-button");

  function playSound(soundPath) {
    if (muteState === 1) {
      audio.play(); // Play the sound
      globalAudio.play();
    }
  }

  function updateUI() {
    // Update the image
    document.body.style.backgroundImage = 'url("images/forest2/4.2.png")';
    // textElement.textContent = images[currentIndex].text; //Update the text
    if (muteState === 1) {
      audio.src = images[currentIndex].sound;
      audio.play();
      globalAudio.play();
    }
    muteButton.textContent = muteState === 1 ? "Mute" : "Unmute";
  }

  muteButton.addEventListener("click", () => {
    if (muteState === 1) {
      muteState = 0;
      localStorage.setItem('muteState', muteState); // Save state to localStorage
      globalAudio.pause();
      muteButton.textContent = "Unmute";
    } else {
      muteState = 1;
      localStorage.setItem('muteState', muteState); // Save state to localStorage
      globalAudio.play();
      muteButton.textContent = "Mute";
    }
  });

  // Initial UI setup
  updateUI();
