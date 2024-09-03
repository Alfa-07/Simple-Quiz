const questions = [
    { question: 'What is 2 + 2?', options: ['3', '4', '5'], answer: '4' },
    { question: 'What is 3 + 5?', options: ['7', '8', '9'], answer: '8' },
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    document.getElementById('result').textContent = selectedOption === correctAnswer ? 'Correct!' : 'Incorrect!';
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
}

displayQuestion();
