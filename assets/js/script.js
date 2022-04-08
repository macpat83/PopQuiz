var timerEl = document.getElementById('countdown');
var start_bttn = document.querySelector(".start-btn button");
var container = document.querySelector("container");
const question_text = document.querySelector(".question_text");
const selection_text = document.querySelector(".selection_text");

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

// function to run quiz
function runQuiz(){
}

    

countdown();



