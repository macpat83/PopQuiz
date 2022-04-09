const QUIZ_BOXES = document.querySelectorAll('.quiz-box');

const START_SECTION = document.getElementById("start");
const START_BTTN = document.getElementById("start_bttn");

var QUIZ_BOX = document.getElementById("quiz-questions");
var TIME_LEFT = document.getElementById("time-left");
var QUESTION = document.getElementById("question");
var SELECTIONS = document.getElementById("selections");
var SELECTIONS_STATUS = document.querySelectorAll(".selection-status")
// var RIGHT = document.getElementById("correct");
// var WRONG = document.getElementById("incorrect");

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
    showElement(QUIZ_BOXES, QUIZ_BOX);
    countDown();
    showQuestions();
    beginCountdown();
}

function showElement(siblingList, showElement) {
    for (element of siblingList) {
      hideElement(element);
    }
    showElement.classList.remove("hidden");
  } 
  
  function hideElement(element) {
    if (!element.classList.contains("hidden")) {
      element.classList.add("hidden");
    }
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
    Question.textContent = QUESTION_OPTIONS[startQuestion].question;

    showSelectionList();
}

function showSelectionList() {
    SELECTIONS.innerHTML = "";

    QUESTION_OPTIONS[startQuestion].selections.forEach(function(answer, index) {
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
    if (correctAnswer(userSelection)) {
        showCorrectAnswer();
    } else {
        showWrongAnswer();
    }
}

function correctAnswer(selection) {
    return selection === QUESTION_OPTIONS[startQuestion].indexOfCorrectSelections;
}

function showCorrectAnswer() {
    showElement(SELECTIONS_STATUS);
}

function showWrongAnswer() {
    timePenalty(10);


}

function timePenalty(seconds) {
    maxTime -= seconds;
    endTime();
    countDown();
}

function goToNextQuestion() {
    startQuestion++;
    if (startQuestion >= QUESTION_OPTIONS.length) {
        finishGame();
    }else {
        showQuestions();
    }
    
}

function finishGame() {
    clearInterval(maxTimeInterval);
    showElement(QUIZ_BOXES, RESULTS_SECTION)
    showScore();
    scoreResult();

}

function showScore() {
    SCORE.textContent = maxTime;
}

function scoreResult() {
    if (maxTime === 0) {
        RESULTS_TITLE = "You ran out of time!";
    } else {
        RESULTS_TITLE.textContent = "Yay, you were able to complete the quiz in time!";
    }
}

function inputScore(event) {
    
    var initials = INITIALS_ENTERED.ariaValueMax.toUpperCase();

    if (initials) {
        var score = maxTime;
        var highscore = newHighScore(initials, score);
        saveHighScore(highscore);
    }
}

function newHighScore(initials, score) {
    var input = {
        initials: initials,
        score: score,
    }
    return input;
    }


    function saveHighScore(highscore) {
        var scores = leaderBoard();
        addHighScore(highscore, scores);
        localStorage.setItem('LeaderBoard', JSON.stringify(scores));
        
    }

    function leaderBoard() {
        var scores = localStorage.getItem('LeaderBoard')
        if (scores) {
            return JSON.parse(scores);
        }else {
            return [];
        }
    }
