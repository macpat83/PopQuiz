let questions = [{
    number: 1,
    question:"",
    selections: [
        // a
        // b
        // c
        // d
    ],
    answer: ""
},

{
number: 2,
    question:"",
    selections: [
        // a
        // b
        // c
        // d

    ],
    answer:"",
},

{
    number: 3,
        question:"",
        selections: [
            // a
            // b
            // c
            // d

        ],
        answer:"",
    },

    {
        number: 4,
            question:"",
            selections: [
                // a
                // b
                // c
                // d
    
            ],
            answer:"",
        },

        {
number: 5,
    question:"",
    selections: [
        // a
        // b
        // c
        // d

    ],
    answer:"",
}

];



var timerEl = document.getElementById('countdown');
var start_bttn = document.querySelector(".start-btn button");
var quit_bttn = document.querySelector(".buttons button")
var restart_bttn = document.querySelector(".buttons button")
var container = document.querySelector("container");
const question_text = document.querySelector(".question_text");
const selection_text = document.querySelector(".selection_text");
var quiz = document.querySelector(".quiz")
var results = document.querySelector(".results")

//start quiz
start_bttn.onclick = ()=> {
    quiz.classList.add("showQuiz");

}

quit_bttn.onclick = ()=> {
    quiz.classList.remove("showQuiz");
}


function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if(timeLeft){
          timerEl.textContent = timeLeft + " seconds remaining";
          timeLeft--;
        }
    
        else {
          timerEl.textContent ="";
          displayMessage();
          clearInterval(timeInterval);
        }
      }, 1000);
    
    }



// function to run quiz
function runQuiz(){
}



    

countdown();



