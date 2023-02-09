// ----- MODEL -----


// ----- VIEW -----

goToA()
function goToA(){
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=dungeon-pictures/room-a.png>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in room A. <br>The room has 2 exits. <br>Choose one to proceed. 
    <div class="goToA">
    <button id="button-B" onclick="goToB()">Go to B</button>
    <button id="button-H" onclick="goToH()">Go to H</button>
    <div>
    `;
}

function goToB(){
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=dungeon-pictures/room-b.png>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in room B. <br>The room has 2 exits. <br>Choose one to proceed.
    <div class="goToB">
    <button id="button-C" onclick="goToC()">Go to C</button>
    <button id="button-A" onclick="goToA()">Go to A</button>
    <div>
    `;
}


// ----- CONTROLLER -----

//delay on buttons, they will show after 1sec
document.getElementById("button-A").style.display = "none";
document.getElementById("button-B").style.display = "none";
document.getElementById("button-C").style.display = "none";
document.getElementById("button-D").style.display = "none";
document.getElementById("button-E").style.display = "none";
document.getElementById("button-F").style.display = "none";
document.getElementById("button-G").style.display = "none";
document.getElementById("button-H").style.display = "none";
document.getElementById("button-J").style.display = "none";

setTimeout(function() {
document.getElementById("button-A").style.display = "block";
document.getElementById("button-B").style.display = "block";
document.getElementById("button-C").style.display = "block";
document.getElementById("button-D").style.display = "block";
document.getElementById("button-E").style.display = "block";
document.getElementById("button-F").style.display = "block";
document.getElementById("button-G").style.display = "block";
document.getElementById("button-H").style.display = "block";
document.getElementById("button-J").style.display = "block";

}, 2000);