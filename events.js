window.onload = Timer() 




function Timer() {
    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var milliseconds = 00;
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");
    var resetButton = document.getElementById("resetButton");
    var Interval;

    startButton.onclick = start()
    function start() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1)
    }

    stopButton.onclick = stop();
    function stop() {
        clearInterval(Interval)
    }

    resetButton.onclick = reset();
    function reset() {
        clearInterval(Interval);
        hours = 00;
        minutes = 00;
        seconds = 00;
        milliseconds = 00;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = hours;
        document.getElementById("seconds").innerHTML = hours;
        document.getElementById("milliseconds").innerHTML = hours;
    }

};

    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
  
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }