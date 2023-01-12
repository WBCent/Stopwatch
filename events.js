window.onload = function() {
    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var milliseconds = 00;
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");
    var resetButton = document.getElementById("resetButton");
    var Interval;

    startButton.onclick = function() {
        clearInterval(Interval);
         Interval = setInterval(startTimer, 1);
      }
      
        stopButton.onclick = function() {
           clearInterval(Interval);
      }


    resetButton.onclick = function() {
        clearInterval(Interval);
        hours = 00;
        minutes = 00;
        seconds = 00;
        milliseconds = 00;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("milliseconds").innerHTML = milliseconds;
    }
    
    function startTimer() {
        milliseconds++;
        if(milliseconds <= 9){
            document.getElementById("milliseconds").innerHTML = "0" + milliseconds;
        }
        if (milliseconds > 9) {
            document.getElementById('milliseconds').innerHTML = milliseconds;
        }
        if (milliseconds > 99) {
            seconds++;
            document.getElementById("seconds").innerHTML = "0" +seconds;
            milliseconds =0;
            document.getElementById("milliseconds") = "0"+ 0;
        }
        if (seconds > 9) {
            document.getElementById('seconds').innerHTML = seconds;
        }
        if(seconds>59) {
            minutes++;
            document.getElementById('minutes').innerHTML = "0" + minutes;
            seconds = 0;
            document.getElementById("seconds") = "0" + 0;
        }
        if (minutes > 9) {
            document.getElementById('minutes').innerHTML = minutes;
        }
        if(minutes>59) {
            hours++;
            document.getElementById('hours').innerHTML = "0" + hours;
            minutes = 0;
            document.getElementById("minutes") = "0" + 0;
        }

    }

};