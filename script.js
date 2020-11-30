let button = null;
let paragraph = null;
let missionAbort = null;

function init () {
    missionAbort = document.getElementById("abortMission");
    button = document.getElementById("liftoff");
    paragraph = document.querySelector("p");

    // Put your code for the exercises here.
    function liftOffPushed(){
        paragraph.innerHTML = "Houston, We Have Liftoff"
    }
    function hoverAbort(){
      missionAbort.style.backgroundColor = 'red'; 
    }
    function clickAbort(){
      response = window.confirm('Are you sure you want to abort the mission?');
    }
    button.addEventListener("click", liftOffPushed);
    missionAbort.addEventListener("mouseover", hoverAbort);
    missionAbort.addEventListener("click",clickAbort);
    }
    
window.onload = init;