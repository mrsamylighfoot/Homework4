// var quizContainer = document.getElementById('quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');

// function buildQuiz(){

// }

// function showResults(){

// }
// // call function: display quiz right away
// buildQuiz();

// // when button clicked, show results
// submitButton.addEventListener('click', showResults);

// Array to hold the individual questions of the quiz so we can iterate on quiz.
var myQuestions = [
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ['a', 'b', 'c'],
        correctAnswer: "b"
    }
    {
        question: "Question 1 here",
        answers: ['a', 'b', 'c'],
        correctAnswer: "b"
    }
    {
        question: "Question 1 here",
        answers: ['a', 'b', 'c'],
        correctAnswer: "b"
    }
    {
        question: "Question 1 here",
        answers: ['a', 'b', 'c'],
        correctAnswer: "b"
    }
]
   
// // function buildQuiz(){
//     // variable to store the HTML output
//     var output = [];
  
//     // for each question...
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {
  
//         // variable to store the list of possible answers
//         var answers = [];
  
//         // and for each available answer...
//         for(letter in currentQuestion.answers){
  
//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }
  
//         // add this question and its answers to the output
//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//           <div class="answers"> ${answers.join('')} </div>`
//         );
//       }
//     );
  
//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
//  