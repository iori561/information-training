let count = 0;
function increaseCount(){
    if(count < 5){
        count++;
    document.getElementById("counter").innerText = count;
    }
}
function herasuCount(){
    count--;
    document.getElementById("counter").innerText = count;
}