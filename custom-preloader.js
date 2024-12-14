const customTexts = ["Unveiling Firefox","History" , "Milestones", "Impacts", "Project By.." , "Team NU-GEN" ];
let currentIndex = 0;

const customTextElement = document.getElementById("custom-preloader-text");
const preloader = document.getElementById("custom-preloader");
const mainContent = document.querySelector(".main-content");

function showCustomTexts() {
  if (currentIndex < customTexts.length) {
   
    customTextElement.textContent = customTexts[currentIndex];
    customTextElement.style.animation = "none";
    void customTextElement.offsetWidth; 
    customTextElement.style.animation = "fadeInOut 3s ease-in-out forwards";

    currentIndex++;
    setTimeout(showCustomTexts, 3000); 
  } else {
    
    preloader.classList.add("slide-up");

    
    setTimeout(() => {
      preloader.style.display = "none";
      mainContent.style.display = "block";
    }, 1000); 
  }
}

window.onload = () => {
  showCustomTexts();
};
