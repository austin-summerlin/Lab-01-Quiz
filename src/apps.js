import { isYes } from './utils.js';

const quiz = document.getElementById('takeQuiz');
const results = document.getElementById('resultsDiv');

quiz.addEventListener('click', () => {
    alert('Do you want to take a quiz?');
    const wantsToTakeQuiz = confirm('Are You Sure?');
    if (!wantsToTakeQuiz) {
        alert('Okay. Have Fun Exploring.');
        return;
    }

    const userName = prompt('What is your name?');
    let userScore = 0;

    const firstAnswer = prompt('Was Austin born in Texas?');
    const secondAnswer = prompt('Does Austin have 2 pets');
    const thirdAnswer = prompt('Does Austin Enjoy Snorkling?');

    if (isYes(firstAnswer)) userScore++;
    if (isYes(secondAnswer)) userScore++;
    if (!isYes(thirdAnswer)) userScore++;

    const resultsString = `Cool ${userName} you scored ${userScore} out of three.`;
    results.textContent = resultsString;
});