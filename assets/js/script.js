
const QUIZ_BOXES = document.querySelectorAll('.quiz-box');

const START_SECTION = document.getElementById("start");
const START_BTTN = document.getElementById("start_bttn");
const HIGHSCORE_BTTN = document.getElementById("highscore_bttn");

const QUIZ_BOX = document.getElementById("quiz-questions");
const TIME_LEFT = document.getElementById("time-left");
const QUESTION = document.getElementById("question");
const SELECTIONS = document.getElementById("selections");
const SELECTIONS_STATUS = document.querySelectorAll(".selection-status")
const RIGHT = document.getElementById("correct");
const WRONG = document.getElementById("incorrect");
const INITIALS = document.getElementById("initials");
const HIGHSCORE = document.getElementById("score");
const HIGHSCORE_INPUT = document.getElementById("highscore_input");

const RESULTS_SECTION = document.getElementById("results");
const RESULTS_TITLE = document.getElementById("results-title");
const SCORE = document.getElementById("score");
const INITIALS_ENTERED = document.getElementById("initials");
const ENTER_SCORE = document.getElementById("high-score");
const ERROR_MESSAGE = document.getElementById("error-message");
const HIGH_SCORE= document.getElementById("highscore")

//constructpr for questions
class Question {
    constructor(question, selections, indexOfCorrectSelections) {
        this.question = question;
        this.selections = selections;
        this.indexOfCorrectSelections = indexOfCorrectSelections;

    }
}
//Question objects
const QUESTION_1 = new Question("Which country does Forrest Gump travel to as part of the All-American Ping-Pong Team? ", 
  ["Vietnam", "Sweden", "China", "France"], 2);
const QUESTION_2 = new Question("Who directed the hit 2017 movie Get Out?", 
  ["James Wan", "Jordan Peele", "Guillermo del Toro", "Tim Story"], 1);
const QUESTION_3 = new Question("What item is in every Fight Club scene?", 
  ["A Coca-Cola can", "A Dunkin' donut", "A Pepsi bottle", "A Starbucks cup"], 3);
const QUESTION_4 = new Question("If you watch the Marvel movies in chronological order, which movie would you watch first?", 
  ["Iron Man", "Doctor Stange", "Captain America: The First Avenger", "Captain Marvel"], 2);
const QUESTION_5 = new Question("Which is the first movie in the Bourne franchise?", 
  ["The Bourne Identity", "The Bourne Legacy", "The Bourne Supremacy", "Jason Bourne"], 0);
const QUESTION_OPTIONS = [QUESTION_1, QUESTION_2, QUESTION_3, QUESTION_4, QUESTION_5];

let startQuestion = 0;

let maxTime = 60;
let maxTimeInterval;
let selectionOptionExpire;

    /*Event Listeners */
    START_BTTN.addEventListener('click', beginGame);
    SELECTIONS.addEventListener('click', assessSelection);
    ENTER_SCORE.addEventListener('submit', inputScore);
    HIGHSCORE_BTTN.addEventListener('click', viewHighScore);

//function to start game
function beginGame() {
    showElement(QUIZ_BOXES, QUIZ_BOX);
    countDown();
    showQuestion();
    beginCountdown();
}

//function to show and hide elements
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

//function for countdown
function countDown() {
    TIME_LEFT.textContent = maxTime;
}

//function to begin countdown
function beginCountdown() {
    maxTimeInterval = setInterval(function() {
        maxTime--;
        countDown();
        endTime();

    }, 1000);
}

//function to capture time remaining
function endTime() {
    if (maxTime <= 0) {
        maxTime = 0;
        finishGame();
    }
}

//function to show question
function showQuestion() {
    QUESTION.textContent = QUESTION_OPTIONS[startQuestion].question;
    showSelectionList();
}

//function to show answer choices
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


//function to get users answer choice
function assessSelection(event) {
    var userSelection = parseInt(event.target.parentElement.dataset.index);

    verifySelection(userSelection);
    goToNextQuestion();
}

//function to verify if answer choice is correct
function verifySelection(userSelection) {
    if (correctAnswer(userSelection)) {
        showCorrectAnswer();
    } else {
        showWrongAnswer();
    }
}

//function to capture correct answer
function correctAnswer(selection) {
    return selection === QUESTION_OPTIONS[startQuestion].indexOfCorrectSelections;
}

//function to show correct response
function showCorrectAnswer() {
    showElement(SELECTIONS_STATUS, RIGHT);
    selectionStatusTimeout = setTimeout(function() {
        hideElement(RIGHT);
    }, 1000);
}

//function to show incorrect response
function showWrongAnswer() {
    timePenalty(10);
    showElement(SELECTIONS_STATUS, WRONG)
    selectionStatusTimeout = setTimeout(function() {
        hideElement(WRONG);
    }, 1000);


}

//function for the incorrect time 
function timePenalty(seconds) {
    maxTime -= seconds;
    endTime();
    countDown();
}

//function to get the next question
function goToNextQuestion() {
    startQuestion++;
    if (startQuestion >= QUESTION_OPTIONS.length) {
        finishGame();
    }else {
        showQuestion();
    }
    
}

//function to finish the game
function finishGame() {
    clearInterval(maxTimeInterval);
    showElement(QUIZ_BOXES, RESULTS_SECTION)
    showScore();
    scoreResult();

}

//function to showscore
function showScore() {
    SCORE.textContent = maxTime;
}

//function to get scoreResult
function scoreResult() {
    if (maxTime === 0) {
        RESULTS_TITLE.textContent = "You ran out of time!";
    } else {
        RESULTS_TITLE.textContent = "Yay, you were able to complete the quiz in time!";
    }
}

//function to enter score into local storage
function inputScore(event) {
    event.preventDefault();
    
    
    var initials = INITIALS_ENTERED.value
    

    if (initials) {
        var score = maxTime;

        var highscore = {initials, score}
        localStorage.setItem("leaderboard", JSON.stringify(highscore)) 
        
    }
}

//function to get scores out of local storage and display
function viewHighScore(){
    showElement(QUIZ_BOXES, HIGH_SCORE);
    var highscore = JSON.parse(localStorage.getItem("leaderboard"));
    var initials = highscore.initials;
    var score = highscore.score;
    HIGHSCORE_INPUT.textContent = initials + " " + score;
   

}

