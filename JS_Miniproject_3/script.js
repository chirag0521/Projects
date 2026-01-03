var questions = [
    {
        question: "Which is the larget animal in the world?",
        answers : [
            {text: "Shark" , correct: false},
            {text: "Blue whale" , correct: true},
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false},
        ]
    },
    {
        question: "Which is the larget desert in the world?",
        answers : [
            {text: "Kalahari" , correct: false},
            {text: "Sahara" , correct: true},
            {text: "Gobi" , correct: false},
            {text: "Antarctica" , correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers : [
            {text: "Vatican City" , correct: true},
            {text: "Bhutan" , correct: false},
            {text: "Nepal" , correct: false},
            {text: "Sri Lanka" , correct: false},
        ]
    },
];


var questionElement = document.getElementById("question");
var answerButton = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        
    })
}
