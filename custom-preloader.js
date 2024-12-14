const customTexts = ["Unveiling Firefox","History" , "Milestones", "Impacts", "Project By.." , "Team NU-GEN" ];
let currentIndex = 0;

const customTextElement = document.getElementById("custom-preloader-text");
const preloader = document.getElementById("custom-preloader");
const mainContent = document.querySelector(".main-content");

function showCustomTexts() {
  if (currentIndex < customTexts.length) {
    // Set current text and restart its animation
    customTextElement.textContent = customTexts[currentIndex];
    customTextElement.style.animation = "none";
    void customTextElement.offsetWidth; // Trigger reflow to restart animation
    customTextElement.style.animation = "fadeInOut 3s ease-in-out forwards";

    currentIndex++;
    setTimeout(showCustomTexts, 3000); // Delay before showing the next text
  } else {
    // Add slide-up class after all texts are shown
    preloader.classList.add("slide-up");

    // Show main content after slide-up animation completes
    setTimeout(() => {
      preloader.style.display = "none";
      mainContent.style.display = "block";
    }, 1000); // Match slide-up animation duration (1s)
  }
}

window.onload = () => {
  showCustomTexts();
};
