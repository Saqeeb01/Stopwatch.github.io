var seconds = document.getElementById('seconds');
var milliseconds = document.getElementById('milliseconds');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var sec = 0;
var millisec = 0;
var timeInterval;

const timer=()=>{
    millisec++;

    if(millisec<9){
        milliseconds.innerHTML= "0" + millisec; 
    }
    
    if(millisec>9){
    milliseconds.innerHTML=millisec;
}

if(millisec>99){
sec++;
seconds.innerHTML = "0" + sec; 
millisec=0;
milliseconds.innerHTML="0" + 0;
}

if(sec>9){
    seconds.innerHTML = sec;
}
}

//START

 start.addEventListener('click',()=>{
    timeInterval=setInterval(timer,10)
 })

 //STOP

 stop.addEventListener('click',()=>{
    clearInterval(timeInterval);
 })

 //RESET

 reset.addEventListener('click',()=>{
    clearInterval(timeInterval);
    sec =" 00";
    millisec="00";
    seconds.innerHTML=sec;
    milliseconds.innerHTML=millisec;
    seconds=sec;
    console.log(seconds);
 })
