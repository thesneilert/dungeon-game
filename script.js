// ----- MODEL -----


// ----- VIEW -----

goToA()
function goToA(){
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=map-pictures/room-a.png>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in room A. <br>The room has 2 exits, choose one to proceed.
    <button onclick="goToB()">Go to B</button>
    <button onclick="goToH()">Go to H</button>
    `;
}

function goToB(){
    document.getElementById("appPicture").innerHTML = /*html*/`
    <img src=map-pictures/room-b.png>
    `;
    document.getElementById("appText").innerHTML = /*html*/`
    You are in room B. <br>The room has 2 exits, choose one to proceed.
    <button onclick="goToC()">Go to C</button>
    <button onclick="goToA()">Go to A</button>
    `;
}

// ----- CONTROLLER -----