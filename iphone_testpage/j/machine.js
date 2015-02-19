var document;
var timerID = null;
var timerRunning = false;

function stopclock(){
    if(timerRunning)
        clearTimeout(timerID);
    timerRunning = false;
}

function startclock(){
    stopclock();
    showtime();
}

function showtime(){
    var thisDay;
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var year = now.getFullYear();
    var day = now.getDate();
    var myDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var timeValue = "" + ((hours > 12) ? hours - 12 : hours);
    timeValue  += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue  += ((seconds < 10) ? ":0" : ":") + seconds;
    timeValue  += (hours >= 12) ? " P.M." : " A.M.";
    document.clock.face.value = timeValue ;
    thisDay=now.getDay();
    thisDay=myDays[thisDay];
     document.getElementById("iw_1").innerHTML = thisDay + ", " + day + "\u0020" + year;
    timerID = setTimeout("showtime()",1000);
    timerRunning = true;
    
}

