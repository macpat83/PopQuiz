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


countdown();


