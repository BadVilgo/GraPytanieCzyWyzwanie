// Globalna zmienna przechowująca bieżący poziom trudności
let currentLevel = 'EASY';

// Funkcja aktualizująca poziom trudności
function updateLevel(level) {
    currentLevel = level;
}

// Funkcja pomocnicza do losowania pytania lub wyzwania na podstawie poziomu trudności
async function getRandomItem(type) {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        // Dopasowanie typu w zależności od poziomu trudności
        let levelType;
        if (currentLevel === 'EASY') {
            levelType = type;
        } else if (currentLevel === 'MEDIUM') {
            levelType = type + '2';
        } else if (currentLevel === 'HARD') {
            levelType = type + '3';
        }

        const items = data.filter(item => item.type === levelType);
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex].text;
        document.getElementById('output-text').innerText = randomItem;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

// Funkcje do losowania pytania i wyzwania
function getRandomQuestion() {
    getRandomItem('question');
}

function getRandomChallenge() {
    getRandomItem('challenge');
}

// Przykładowa funkcja zmieniająca poziom trudności (wywoływana np. po kliknięciu strzałki)
function changeLevel(newLevel) {
    document.getElementById('level-text').innerText = `Poziom ${newLevel}`;
    updateLevel(newLevel);
}

// Dodanie nasłuchiwania na przyciski zmiany poziomu
document.getElementById('left-arrow').addEventListener('click', () => {
    if (currentLevel === 'MEDIUM') {
        changeLevel('EASY');
    } else if (currentLevel === 'HARD') {
        changeLevel('MEDIUM');
    }
});

document.getElementById('right-arrow').addEventListener('click', () => {
    if (currentLevel === 'EASY') {
        changeLevel('MEDIUM');
    } else if (currentLevel === 'MEDIUM') {
        changeLevel('HARD');
    }
});

// Inicjalizacja poziomu przy starcie
updateLevel('EASY');
