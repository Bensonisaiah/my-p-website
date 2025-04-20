//const starting = document.getElementById("str");
//const reseting = document.getElementById("res");
//const stoping = document.getElementById("stp");
//const seconds = document.getElementById("sec");
//const minute = document.getElementById("min");
//const hour = document.getElementById("hr");

let secs = 0;
let mins = 0;
let hrs = 0;
let timer = null
function stopwatch(){
    secs ++;
    if (secs == 60){
        secs = 0;
        mins += 1;
    }
    if (mins == 60){
        mins = 0;
        hrs += 1;
    }
    //timer = setInterval(stopwatch, 1000)
    

    //seconds.textContent = secs;
    //minute.textContent = mins;
    //hour.textContent = hrs;

    let h = hrs < 10 ? "0" + hrs : hrs;
    let m = mins < 10 ? "0" + mins : mins;
    let s = secs < 10 ? "0" + secs : secs;



    h1.innerHTML = h + ":" + m + ":" + s;

}
function watchstart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}
function stop(){
    clearInterval(timer);
}
function resetwatch() {
    clearInterval(timer);

    secs = 0;
    mins = 0;
    hrs = 0;

    h1.innerHTML = "00:00:00";
}