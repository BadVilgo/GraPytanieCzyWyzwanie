// Strzałki w prawo i lewo
document.addEventListener("DOMContentLoaded", () => {
    const levels = ["Poziom EASY", "Poziom MEDIUM", "Poziom HARD"];
    let currentIndex = 0;

    const levelText = document.getElementById("level-text");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            levelText.innerText = levels[currentIndex];
        }
    });

    rightArrow.addEventListener("click", () => {
        if (currentIndex < levels.length - 1) {
            currentIndex++;
            levelText.innerText = levels[currentIndex];
        }
    });
});
