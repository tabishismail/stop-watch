var hr = "00";
var min = "00";
var sec = "00";
var miliSec = "00";
var timer;

function callTimer() {
    miliSec++;
    if (miliSec <10) {
        miliSec = "0"+ miliSec;
       
    }
    else if (miliSec >=100){
        miliSec = "00";
        sec++;
        if (sec <10){
            sec = "0"+sec;
        }
        else if (sec ==60){
            sec = "00";
            min++;
            if(min <10){
                min = "0"+min;
            }
            else if(min ==60){
                min = "00";
                hr++;
            }
        }
    }
    document.getElementById("display").innerHTML =hr +":" + min + ":" +sec + ":" +miliSec;

}

function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(callTimer, 10);
}

function stop() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}

function reset() {
    stop();
    hr="00";
    min = "00";
    sec = "00";
    miliSec = "00";
    document.getElementById("display").innerHTML = hr+":"+ min + ":" + sec + ":" + miliSec;
}