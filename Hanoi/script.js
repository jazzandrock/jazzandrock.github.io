"use strict";
var DISK_SIZE = 20;

onload=function() {
    /*
     * 1. After it is pressed, it starts to count to five, 
     * and if it's pressed again, it runs function f
     */
    var start_button = document.getElementById("start_button");
    start_button.onclick 
        = confirmRunning(animateStartButtonOnConfirmation.bind(start_button), 
            startNewGame.bind(start_button), 3000);


}


function logAction (msg) {
    document.getElementById("actual_actions_log").appendChild(createLogMessageElement(msg));
    // document.getElementById("actual_actions_log").innerHTML += "<br>";

    function createLogMessageElement (msg) {
        var li = document.createElement("li");
        li.innerText = msg;

        return li;
    }
}

/*
 * this function will take care of remembering what 
 * disk was clicked, run functions to calculate 
 * arrays and new positions...
 */
function onDiskClick (ev) {
    this.setAttribute("data-traveled-from", this.parentNode.getAttribute("data-num"));
    console.log(this);
}


function dragstart_handler(ev) {
    // ev.dataTransfer.dropEffect = "move";
    ev.dataTransfer.setData("identifier", ev.target.id);
    ev.dataTransfer.effectAllowed = "copyMove";
}



function dragover_handler(ev) {
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = "move"
}


function drop_handler(ev) {
    ev.preventDefault();
    if (event.target.getAttribute("droppable") !== "true") return;
    // Get the id of the target and add the moved element to the target's DOM
    var id = ev.dataTransfer.getData("identifier");
    var elem = document.getElementById(id);
    /* can we do it? */
    var firstElementInTargetTower = ev.target.querySelector("li");
    var firstElementInTargetTowerIndex = firstElementInTargetTower ? firstElementInTargetTower.id[4] : 65;
    if (!((+id[4]) > firstElementInTargetTowerIndex)) {
        logAction(elem.getAttribute("data-traveled-from") + " -> " + ev.target.id[5]);

        ev.target.insertBefore(document.getElementById(id), firstElementInTargetTower);
        cleanUpDisksInTower(ev.target);
        cleanUpDisksInTower(document.getElementById("tower"+elem.getAttribute("data-traveled-from")));
    }
}


function dragend_handler(ev) {
    ev.dataTransfer.clearData();
}

function cancelMove() {
    var lastMoveLi = document.getElementById("actual_actions_log").lastChild;
    if (!lastMoveLi) return;
    var lastMoveData = lastMoveLi.innerText.match(/\d/g);

    var destinationTower = document.getElementById("tower" + lastMoveData[1]);
    var movedElement = destinationTower.firstChild;
    var startTower = document.getElementById("tower" + lastMoveData[0]);
    startTower.insertBefore(movedElement, startTower.firstChild);
    cleanUpDisksInTower(startTower);
    cleanUpDisksInTower(destinationTower);

    document.getElementById("actual_actions_log").removeChild(lastMoveLi);
}


function cleanUpDisksInTower (tower) {
    var disks = tower.querySelectorAll("li");


    if (!disks.length) return;

    for (var i = 0; i < disks.length; i++) {
        disks[i].style.top = (520 - 30 * disks.length) + "px";
        disks[i].setAttribute("draggable", "false");
    }
    disks[0].setAttribute("draggable", "true");
}

function startNewGame () {    
    var tower1 = document.getElementById("tower1");
    document.getElementById("cancel_button").style.background = "#a5ccff";

    /* delete everything in the towers */
    [].map.call(document.getElementById("towers_container").querySelectorAll("ul"), function (a) {
        a.innerHTML = "";
    });
    /* delete log */
    document.getElementById("actual_actions_log").innerHTML = "";



    var disksNumber = +start_button.getAttribute("data-number-of-disks");

    for (var i = 0; i < disksNumber; i++) {
        tower1.appendChild(makeDiskOfSize(i+1));
    }
    cleanUpDisksInTower(tower1);
}

function animateStartButtonOnConfirmation () {
    // *this* will be passed via *bind*
    // this === start_button 
    console.log(this);
    this.setAttribute("data-number-of-disks", this.querySelector("span").innerText); 
    this.innerHTML = "press again for confirmation";

    window.setTimeout(function(){
        this.innerHTML = 'start with <span onclick="event.stopPropagation()" id="number_of_disks_input" contenteditable>5</span> disks';
    }.bind(this), 3000);
}


/*
 * this function needs to be called twice
 * in *delay* milliseconds in order
 * to run f2. The first time it runs f1
 */
function confirmRunning (f1, f2, delay) {
    var firstTime = 0;

    return function () {

        if ((Date.now() - firstTime) > delay) {
            firstTime = Date.now();
            return f1();
        }
        return f2();
    }
}


/*
 * return a li for appending to first tower.
 * since the bigger size, the bigger position index,
 * we will call it "diskn", where int n = size
 */
function makeDiskOfSize (size) {
    var li = document.createElement("li");
    li.innerText = size;
    /* well, I just have a good enough mood for that */
    li.setAttribute("class", "disk");
    li.setAttribute("id", "disk" + size);
    li.setAttribute("data-size", size);
    li.setAttribute("draggable", "true");

    li.style.width = DISK_SIZE * size + "px";
    li.style.marginLeft = ((300 - DISK_SIZE * size) / 2) + "px";
    /*li style height will be defined in main.css */
    li.ondragstart = dragstart_handler;
    li.ondragover = dragover_handler;
    li.onmousedown = onDiskClick;


    return li;
}
