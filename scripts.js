// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function (event) {
        let readyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        confirmTakeoff(readyForTakeoff);
    });

    let land = document.getElementById("landing");
    land.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.")
        landing();
    });

    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function (event) {
        let abortMission = window.confirm("Confirm that you want to abort the mission.")
        confirmAbort(abortMission);
    });

    let up = document.getElementById("up");
    up.addEventListener("click", function (event) {
        let height = document.getElementById("spaceShuttleHeight").innerHTML;
        height = Number(height) + 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = height;
    });

    let down = document.getElementById("down");
    down.addEventListener("click", function (event) {
        let height = document.getElementById("spaceShuttleHeight").innerHTML;
        height = Number(height) - 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = height;
        let perClick = document.getElementById("rocket").style.marginTop;
        perClick = perClick.replace('px', '');
        perClick = Number(perClick) + 10;
        document.getElementById("rocket").style.marginTop = `${perClick}px`;
    });

    let right = document.getElementById("right");
    right.addEventListener("click", function (event) {
        let perClick = document.getElementById("rocket").style.marginLeft;
        perClick = perClick.replace('px', '');
        perClick = Number(perClick) - 10;
        document.getElementById("rocket").style.marginLeft = `${perClick}px`;
    });

    let left = document.getElementById("left");
    left.addEventListener("click", function (event) {
        let perClick = document.getElementById("rocket").style.marginLeft;
        perClick = perClick.replace('px', '')
        perClick = Number(perClick) - 10;
        document.getElementById("rocket").style.marginLeft = `${perClick}px`;
    });
});

function confirmTakeoff(readyForTakeoff) {
    if (readyForTakeoff === true) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = 'blue';
        document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
    };
}

function landing() {
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = 'green';
    document.getElementById("spaceShuttleHeight").innerHTML = "0";
    document.getElementById("rocket").style.marginLeft = '0px';
}

function confirmAbort(abortMission) {
    if (abortMission === true) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = 'green';
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
        document.getElementById("rocket").style.marginLeft = '0px';
    };
}