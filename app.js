var min = "00";
var sec = "00";
var miliSec = "00";
var timer;

function callTimer() {
    miliSec++;
    if (miliSec <10) {
        miliSec = "0"+ miliSec;
    }
    else if( miliSec >=10) {
        if(miliSec<100){    
            if (miliSec === 99) {
            miliSec = "00";
            sec++;
            if (sec < 10){
                sec="0"+sec;
            }
            else if (sec === 60){
                sec = "00";
                min++;
            }
        }
    }

    }
    else{
        miliSec = "00";
    }
    document.getElementById("display").innerHTML = min + ":" +sec + ":" +miliSec;
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
    min = "00";
    sec = "00";
    miliSec = "00";
    document.getElementById("display").innerHTML = min + ":" + sec + ":" + miliSec;
}