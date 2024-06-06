// Losowanie pytania i wyzwania

async function getRandomQuestion() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const questions = data.filter(item => item.type === 'question');
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex].text;
        document.getElementById('output-text').innerText = randomQuestion;
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
}

async function getRandomChallenge() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const challenges = data.filter(item => item.type === 'challenge');
        const randomIndex = Math.floor(Math.random() * challenges.length);
        const randomChallenge = challenges[randomIndex].text;
        document.getElementById('output-text').innerText = randomChallenge;
    } catch (error) {
        console.error('Error fetching challenges:', error);
    }
}



