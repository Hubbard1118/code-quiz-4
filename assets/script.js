// start by setting the variables to keep track of game state
// currentQuesiton
// timeRemaining

let currentQuesiton = "";
const timeRemaining = 60 ;


//  Declare your dom elements such as 
// submit button dom Element
// timer Element
// score
// GetElementByID is more efficient than queryselector 
let submitBtn = document.getElementById("submit");
// timer = document.getElementById("time");
let score = document.getElementById("correct-score");
let start = document.getElementById("timeStart");
let showQuestions = document.getElementById("question");
// startQuiz = document.getElementById("timeStart");


// function to start timer and then call question function to generate the first question and answer buttons
function startTime () {
    setInterval(()=> {
        timeRemaining --;
        timer.textContent = timeRemaining;
        console.log('time');

    }, 1000);
}

// timer.addEventListener("click", startTime);
// function to pull question from questions array and generate buttons with answers by looping over the answer arrays.   

function generateQuestion () {
    let ulCreate = document.createElement("ul");
    showQuestions.appendChild(ulCreate);
    showQuestions.innerHTML = '';
    ulCreate.innerHTML = '';
    for (let i = 0; i < questions.length; i++){
        showQuestions.innerHTML = questions[i].title;
        ulCreate.innerHTML = questions[i].choices;
        console.log();
    }
}
start.addEventListener("click", generateQuestion);


// event function to grab the value of the button clicked and compare to answer.  If same recall question function for the next question, else decrement timer and recall question function for next question

// function to end quiz and capture time remaining as high score.  Store the highscores in local storage.  Dont forget to format the data coming back from high scores in descending order
var startBtn = document.querySelector("#btn");

// startBtn.addEventListener("click", startTime);







const questions = [
    {
        title: 'What is the .log method used for?',
        choices: ['navigating', 'Speaking to the console', 'Reading code'],
        answer: ''
    },
    {
        title: 'What does DOM stand for?',
        choices: ['Direct orientation management', 'Document Object Management', 'Document Object Model'],
        answer: 'Document Object Model'
    },
    {
        title: 'What is CSS?',
        choices: ['Cascading Style Sheet', 'Consistent Style Standards', 'Correct Style Standards'],
        answer: 'Cascading Style Sheet'
    },
    {
        title: 'Which of these is not a data type?',
        choices: ['Numbers', 'Booleans', 'People', 'Strings'],
        answer: 'People'
    },
    {
        title: 'What is the most commonly used language in Web Development?',
        choices: ['PHP', 'Java', 'JavaScript', 'C++'],
        answer: 'JavaScript'
    },
]

