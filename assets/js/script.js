var timerEl = document.getElementById('countdown');

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
    //variable to store the output
    var output= [];
     questions.forEach(
         (currentQuestion, questionNumber) => {
            //var to store answers
            var answers = [];
            
            //each available answer
            for(letter in currentQuestion.answers)
         }
     )
}

    

countdown();


