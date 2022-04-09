let questions = [{
    number: 1,
    question:"",
    answer: "",
    selections: [
        // a
        // b
        // c
        // d
    ]
    
},

{
number: 2,
    question:"",
    answer:"",
    selections: [
        // a
        // b
        // c
        // d

    ]
    
},

{
    number: 3,
        question:"",
        answer:"",
        selections: [
            // a
            // b
            // c
            // d

        ]
    
    },

    {
        number: 4,
            question:"",
            answer:"",
            selections: [
                // a
                // b
                // c
                // d
    
            ]
        },

        {
number: 5,
    question:"",
    answer:"",
    selections: [
        // a
        // b
        // c
        // d

    ]
}

];



var QUIZ_BOXES = document.querySelectorAll(".quiz-box");

var START_SECTION = document.getElementById("start");
var START_BTTN = document.getElementById("start-bttn")

var QUIZ_BOX = document.getElementById("quiz-questions");
var TIME_LEFT = document.getElementById("time-left");
var QUESTION = document.getElementById("question");
var SELECTIONS = document.getElementById("selections");
var SELECTIONS_STATUS = document.querySelectorAll(".selection-status")
var RIGHT = document.getElementById("correct");
var WRONG = document.getElementById("incorrect");

var RESULTS_SECTION = document.getElementById("results");
var RESULTS_TITLE = document.getElementById("results-title");
var SCORE = document.getElementById("score");
var INITIALS_ENTERED = document.getElementById("initials");
var ENTER_SCORE = document.getElementById("high-score");
var ERROR_MESSAGE = document.getElementById("error-message");

class Question {
    constructor(question, selections, indexOfCorrectSelections) {
        this.question = question;
        this.selections = selections;
        this.indexOfCorrectSelections = indexOfCorrectSelections;

    }
}

var QUESTION1 = new Question("Commonly used data types do NOT include: ",
["Strings", "Booleans", "Alerts", "Numbers"], 2);
var QUESTION2 = new Question("The condition in an if/else statement is enclosed within ______.",
["Quotes", "Curly brackets", "Parantheses", "Square brakets"], 2);
var QUESTION3 = new Question("Arrays in Javascript can be used to store ______.",
["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], 3);
var QUESTION4 = new Question("String values must be enclosed within _______ when being assigned to variables.",
["Commas", "Curly Brackets", "Quotes", "Parentheses"], 2);
var QUESTION5 = new Question("A very useful tool used during development and debugging for printing content to the debugger is: ",
["Javascript", "Terminal/Bash", "For Loops", "console.log"], 3);
var QUESTION_OPTIONS = [QUESTION1, QUESTION2, QUESTION3, QUESTION4, QUESTION5];

var startQuestion = 0;

var maxTime = 60;
var maxTimeInterval;
var selectionOptionExpire;

/*Event Listeners */
START_BTTN.addEventListener('click', beginGame);
SELECTIONS.addEventListener('click', assessSelection);
ENTER_SCORE.addEventListener('submit', inputScore);

function beginGame() {
    showElement(QUIZ_BOX, QUIZ_BOXES);
    countDown();
    showQuestions();
    beginCountdown();
}

function countDown() {
    TIME_LEFT.textContent = maxTime;
}

function beginCountdown() {
    maxTimeInterval = setInterval(function() {
        maxTime--;
        countDown();
        endTime();

    }, 1000);
}

function endTime() {
    if (maxTime = 0) {
        endGame();
    }
}

function showQuestions() {
    Question.textContent = QUESTION_OPTIONS[currentQuestion].question;

    showSelectionList();
}

function showSelectionList() {
    SELECTIONS.innerHTML = "";

    QUESTION_OPTIONS[currentQuestion].selections.forEach(function(answer, index) {
        var li = document.createElement("li");
        li.dataset.index = index;
        var button = document.createElement("button");
        button.textContent = (index + 1) + ". " + answer;
        li.appendChild(button);
        SELECTIONS.appendChild(li);
    });
}


function assessSelection(event) {
    var userSelection = parseInt(event.target.parentElement.dataset.index);

    verifySelection(userSelection);
    goToNextQuestion();
}

function verifySelection(userSelection) {
    if ()
}