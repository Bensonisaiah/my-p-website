const decrease = document.getElementById("dec");
const reseting = document.getElementById("reset");
const increase = document.getElementById("inc");
const counting = document.getElementById("count");

let counts = 0;
increase.onclick = function(){
    counts += 1;
    counting.textContent = counts;
}
decrease.onclick = function(){
    counts -= 1;
    counting.textContent = counts;
}
reseting.onclick = function(){
    counts = 0;
    counting.textContent = counts;
}