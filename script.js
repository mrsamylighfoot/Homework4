// GIVEN I am taking a code quiz
// WHEN I click the start button
var startBtn = document.getElementById('startBtn');
var nextBtn = document.getElementById('nextBtn');
var questionContainerEl = document.getElementById('questionContainer');
let shuffledQuestions, currentQuestionIndex
var questionEl = document.getElementById('questions');
var answerBtnEl = document.getElementById('answerBtns');
var StartScreen = document.getElementById('start screen');
var StartButton = document.getElementById('start button');
var QuestionIndex = 0

StartButton.addEventListener('click',function(){
    //StartScreen.setAttribute('class', 'hide');
    questionContainerEl.removeAttribute('class', 'hide');
    console.log(myQuestions[0]);
    getQuestion()
});

nextBtn.addEventListener('click', function(){
    questionContainerEl.removeAttribute('class', 'hide');
    console.log(myQuestions);
    getQuestion()
});

function getQuestion (){
    console.log(myQuestions[0]);
    questionEl.textContent = myQuestions[QuestionIndex].question;
    console.log(myQuestions[QuestionIndex].answers[0]);
    QuestionIndex++;
}



// THEN a timer starts and I am presented with a question
    // function setTime() {
    //     // Sets interval in variable
    //     var timerInterval = setInterval(function() {
    //       secondsLeft--;
    //       timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
    //       if(secondsLeft === 0) {
    //         // Stops execution of action at set interval
    //         clearInterval(timerInterval);
    //         // Calls function to create and append image
    //         sendMessage();
    //       }
  
    //     }, 1000);
    //   }
    // setTime();
function startGame () {
    // Used console.log('Started") to verify that when Start button is clicked, the startGame function is run.
    console.log('Started')
    startBtn.classList.add('hide')
    // choose random question order
    shuffledQuestions = questions.sort(() => Math.random - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    nextQuestion()
}
// WHEN I answer a question
function answerQuestion () {

}
// THEN I am presented with another question
function nextQuestion () {
    // clear previous answers
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

// function showQuestion () {
//     questionEl.innerText = questions.questions
//     questions.answers.forEach(answer => {
//         var button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.right) {
//             button.dataset.right = answer.right
//         }
//         button.addEventListener('click', answerQuestion)
//         answerBtnEl.appendChild(button)
//     })
// }

function resetState () {
    nextBtn.classList.add('hide')
    while (answerBtnEl.firstChild){
        answerBtnEl.removeChild
        (answerBtnEl.firstChild)
    }
}
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var questions = [
    {
        question: 'Q1',
        answers: [
            {text: 'Answer A', right: true},
            {text: 'Answer B', right: false},
            {text: 'Answer C', right: false},
            {text: 'Answer D', right: false}
        ]
    }
]

// Blog on creating javascript quiz: https://www.sitepoint.com/simple-javascript-quiz/
// YouTube with time constraing quiz: https://www.youtube.com/watch?v=pQr4O1OITJo
// Blog with code of quiz for 15 seconds each question: https://dev.to/codingnepal/create-a-quiz-app-with-timer-using-html-css-javascript-55lf
// WDS YouTube (same teacher as YouTube from previous set up) https://www.youtube.com/watch?v=riDzcEQbX6k