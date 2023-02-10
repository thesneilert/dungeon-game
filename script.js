// ----- MODEL -----
var chestState = 0;
var goldReward = 0;
var goldWallet = 0;

// ----- VIEW -----

goToA()
function goToA() {
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=dungeon-pictures/room_a.png></img>
    `;
    setTimeout(function () {
        document.getElementById("appText").innerHTML += /*html*/`
        You are in room A. <br>The room has 2 exits. <br>Choose one to proceed.
        <div class="goToA">
        <button id="button-B" onclick="goToB()">Go to B</button>
        <button id="button-H" onclick="goToH()">Go to H</button>
        <div>
        `;
    }, 1000);
}

function goToB() {
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=dungeon-pictures/room_b.png></img>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in room B. <br>The room has 2 exits. <br>Choose one to proceed.
    <div class="goToB">
    <button id="button-C" onclick="goToC()">Go to C</button>
    <button id="button-A" onclick="goToA()">Go to A</button>
    <div>
    `;

}

function goToC() {
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=dungeon-pictures/room_c.png></img>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in room C. <br>The room has 2 exits. <br>Choose one to proceed.
    <div class="goToC">
    <button id="button-B" onclick="goToB()">Go to B</button>
    <button id="button-D" onclick="goToD()">Go to D</button>
    <div>
    `;
}

function goToD() {
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=dungeon-pictures/room_d.png></img>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in room D. <br>The room has 3 exits. <br>Choose one to proceed.
    <div class="goToD">
    <button id="button-J" onclick="goToJ()">Go to J</button>
    <button id="button-E" onclick="goToE()">Go to E</button>
    <button id="button-C" onclick="goToC()">Go to C</button>
    <div>
    `;
    //make chest dissapear again
    var buttonFinish = document.getElementById("button-finish");
    buttonFinish.style.display = "none";
}

function goToE() {
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=dungeon-pictures/room_e.png></img>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in room E. <br>The room has 2 exits. <br>Choose one to proceed.
    <div class="goToE">
    <button id="button-D" onclick="goToD()">Go to D</button>
    <button id="button-F" onclick="goToF()">Go to F</button>
    <div>
    `;
}

function goToF() {
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=dungeon-pictures/room_f.png></img>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in room F. <br>The room has 2 exits. <br>Choose one to proceed.
    <div class="goToF">
    <button id="button-E" onclick="goToE()">Go to E</button>
    <button id="button-G" onclick="goToG()">Go to G</button>
    <div>
    `;
}

function goToG() {
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=dungeon-pictures/room_g.png></img>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in room G. <br>The room has 2 exits. <br>Choose one to proceed.
    <div class="goToG">
    <button id="button-F" onclick="goToF()">Go to F</button>
    <button id="button-H" onclick="goToH()">Go to H</button>
    <div>
    `;
}

function goToH() {
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=dungeon-pictures/room_h.png></img>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in room H. <br>The room has 2 exits. <br>Choose one to proceed.
    <div class="goToH">
    <button id="button-G" onclick="goToG()">Go to G</button>
    <button id="button-A" onclick="goToA()">Go to A</button>
    <div>
    `;
}

function goToJ() {
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=dungeon-pictures/room_j.png></img>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in the final room. <br>You find a treasure Chest!! <br>Click to see if there is any reward.
    <div class="goToJ">
    <button id="button-D" onclick="goToD()">Go to D</button>
    <div>
    `;
    //chest
    document.getElementById("appChest").innerHTML = /*html*/`
    <img src=chest-pictures/closed.png  id="button-finish" onclick="changeChestImage()"></img>
    `;
    //place chest randomly
    var buttonFinish = document.getElementById("button-finish");
    buttonFinish.style.top = (Math.floor(Math.random() * 250) + 100) + "px";
    buttonFinish.style.left = (Math.floor(Math.random() * 300) + 100) + "px";
    buttonFinish.style.display = "block";
}
//change chest image on click
function changeChestImage() {
    var buttonFinish = document.getElementById("button-finish");
    var buttonD = document.getElementById("button-D");

    if (chestState === 0) {
        chestState++;
        buttonD.style.display = "none";
        setInterval(function () {
            if (chestState === 1) {
                buttonFinish.src = "chest-pictures/opened.png";
                chestState++;
            } else if (chestState === 2) {
                buttonFinish.src = "chest-pictures/more_opened.png";
                chestState++;
            } else if (chestState === 3) {
                buttonFinish.src = "chest-pictures/fully_opened.png";
                chestState++;
            } else if (chestState === 4) {
                buttonFinish.src = "chest-pictures/fully_opened.png";
                chestState++;
                //gives a random reward between 10 and 100
                goldReward = Math.floor(Math.random() * (100 - 10) + 10);
                //calculates together you total gold amount after reward
                goldWallet = goldWallet + goldReward
                //appText show what reward you got and says congrats
                document.getElementById("appText").innerHTML = /*html*/`
              <div class="reward-text">You found ${goldReward} gold coins. Congratulation!</div>
              <br>You now have a total of ${goldWallet} gold coins.
              `;
              //reward amount popup over chest
                var appYouWin = document.getElementById("appYouWin");
                appYouWin.innerHTML = /*html*/`
              +${goldReward}
              `;
                appYouWin.style.left = (buttonFinish.offsetLeft + buttonFinish.offsetWidth / 2.1 - appYouWin.offsetWidth / 2) + "px";
                appYouWin.style.top = (buttonFinish.offsetTop - -20 - appYouWin.offsetHeight) + "px";
            }
        }, 500);
    }
}



// ----- CONTROLLER -----

document.getElementById("button-A").style.display = "none";
document.getElementById("button-B").style.display = "none";
document.getElementById("button-C").style.display = "none";
document.getElementById("button-D").style.display = "none";
document.getElementById("button-E").style.display = "none";
document.getElementById("button-F").style.display = "none";
document.getElementById("button-G").style.display = "none";
document.getElementById("button-H").style.display = "none";
document.getElementById("button-J").style.display = "none";

setTimeout(function () {
    document.getElementById("button-A").style.display = "block";
    document.getElementById("button-B").style.display = "block";
    document.getElementById("button-C").style.display = "block";
    document.getElementById("button-D").style.display = "block";
    document.getElementById("button-E").style.display = "block";
    document.getElementById("button-F").style.display = "block";
    document.getElementById("button-G").style.display = "block";
    document.getElementById("button-H").style.display = "block";
    document.getElementById("button-J").style.display = "block";

}, 1000);