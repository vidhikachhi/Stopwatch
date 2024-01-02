const timer = document.getElementById("stopwatch");
var laps = document.querySelector(".laps")
var hr = 0;
var min = 0;
var sec = 0;
var milisec=0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
  if (stoptime == false) {
    milisec = parseInt(milisec);
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    milisec = milisec + 10;

    if (milisec == 1000) {
        sec++;
        milisec = 0;
      }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }

    if (milisec < 10 ) {
        milisec = "00" + milisec;
      }
      else if(milisec < 100 ) {
        milisec = "0" + milisec;
      }
    if (sec < 10 ) {
      sec = "0" + sec;
    }
    if (min < 10 ) {
      min = "0" + min;
    }
    if (hr < 10 ) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec+ ":" + milisec;
    setTimeout("timerCycle()", 10);
return(hr + ":" + min + ":" + sec+ ":" + milisec);
   
  }
}
function resetTimer() {
  timer.innerHTML = "00:00:00:000";
  laps.innerHTML = "";
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
  milisec=0;
}
function lap() {
    if(!stoptime) {   
        var Li = document.createElement("li")   
        Li.innerHTML =timerCycle() 
        laps.appendChild(Li) 
    }
}