const questions = [
    //first object is first question and answer
    {
        question: "The full form of CSS is:",
        answers: [
            //this contains four array elements that has answer options
            {text:"Cascading Style Sheets", correct: true},
            {text:"Colored Style Sheets", correct: false},
            {text:"Color and Style Sheets", correct: false},
            {text:"None", correct: false},
        ]

    },
    //second question
    {
        question: " How can we change the background color of an element in css?",
        answers: [
            //this contains four array elements that has answer options
            {text:"background color", correct: true},
            {text:"color", correct: false},
            {text:"style", correct: false},
            {text:"none", correct: false},
        ]
    },

    //third question
    {
        question: "How can we change the text color of an element in css?",
        answers: [
            //this contains four array elements that has answer options
            {text:"background color", correct: false},
            {text:"color", correct: true},
            {text:"style", correct: false},
            {text:"none", correct: false},
        ]
    },

    //fourth question
    {
        question: ` What type of CSS is the following code snippet:  <h1 style="color:blue;">A Blue Heading</h1> `  ,
        answers: [
            //this contains four array elements that has answer options
            {text:"Internal", correct: false},
            {text:"Inline", correct: true},
            {text:"External", correct: false},
            {text:"None", correct: false},
        ]
    },

    {
        question: "Which HTML tag is used to declare internal CSS?"  ,
        answers: [
            //this contains four array elements that has answer options
            {text:"style", correct: true},
            {text:"link", correct: false},
            {text:"script", correct: false},
            {text:"None", correct: false},
        ]
    }

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    //code to display the answers

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
 const selectedBtn = e.target;
 const iscorrect = selectedBtn.dataset.correct === "true";
 if(iscorrect){
    selectedBtn.classList.add("correct");
    score++;
 }else{
    selectedBtn.classList.add("incorrect");
 }

 Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
 });
nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();