colorTurn = "red";

function drop(element) {
    
    colNum = String(element.id).substring(4);
    found = false;
    row = 1;
    while (row < 7) {
        /* get background color of spot */
        checking = "spot" + colNum + String(row);
        /* animating - trying to show the pieces falling down. still working on it, so commenting this out for now 
        gsap.fromTo("#testingAnimation", {
            x: 200, //normal value
            y: 100,
          },
          {
            x: 200,
            y: 300,
            duration: 1
          }); */
        spotColor = String(window.getComputedStyle(document.getElementById(checking)).backgroundColor);
        if (spotColor != "rgb(211, 211, 211)") {
            row++;
        }
        else {
            break;
        }
    }
    if (row === 7) {
        if (spotColor != "rgb(211, 211, 211)") {
            alert("That column is full. Choose another.")
            row = 10;
        }
    }
    if (row != 10) {
        document.getElementById(checking).style.backgroundColor = colorTurn;
        checkForWins(colNum, row);
        switchTurn(colorTurn);
    }
    console.log("row:" + row);
        
}

function switchTurn(colorVar) {
    if (colorVar === "blue") {
        colorTurn = "red";
    }
    else {
        colorTurn = "blue";
    }
}

function checkForWins(c,r) {
    r = Number(r);
    c = Number(c);
    /* check the vertical */
    if (r >=4) {
        tempSpotId = "spot" + String(c) + String(r-1);
        tempSpotId2 = "spot" + String(c) + String(r-2);
        tempSpotId3 = "spot" + String(c) + String(r-3);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        alert (theColor1 + theColor2 + theColor3 + colorTurn);
        if (theColor1 === theColor2 && theColor3 === colorTurn && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    
    /* check the horizontals based on column dropped */
    if (c <= 4) {
        console.log("checking 1-4");
        tempSpotId = "spot" + String(1) + String(r);
        tempSpotId2 = "spot" + String(2) + String(r);
        tempSpotId3 = "spot" + String(3) + String(r);
        tempSpotId4 = "spot" + String(4) + String(r);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        theColor4 = document.getElementById(tempSpotId4).style.backgroundColor;
        if (theColor1 === theColor2 && theColor3 === theColor4 && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    if (c >= 2 && c <= 5) {
        console.log("checking 2-5");
        tempSpotId = "spot" + String(2) + String(r);
        tempSpotId2 = "spot" + String(3) + String(r);
        tempSpotId3 = "spot" + String(4) + String(r);
        tempSpotId4 = "spot" + String(5) + String(r);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        theColor4 = document.getElementById(tempSpotId4).style.backgroundColor;
        if (theColor1 === theColor2 && theColor3 === theColor4 && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    if (c >= 3 && c <= 6) {
        console.log("checking 3-6");
        tempSpotId = "spot" + String(3) + String(r);
        tempSpotId2 = "spot" + String(4) + String(r);
        tempSpotId3 = "spot" + String(5) + String(r);
        tempSpotId4 = "spot" + String(6) + String(r);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        theColor4 = document.getElementById(tempSpotId4).style.backgroundColor;
        if (theColor1 === theColor2 && theColor3 === theColor4 && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    if (c >= 4) {
        console.log("checking 4-7");
        tempSpotId = "spot" + String(4) + String(r);
        tempSpotId2 = "spot" + String(5) + String(r);
        tempSpotId3 = "spot" + String(6) + String(r);
        tempSpotId4 = "spot" + String(7) + String(r);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        theColor4 = document.getElementById(tempSpotId4).style.backgroundColor;
        if (theColor1 === theColor2 && theColor3 === theColor4 && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    /* check diagonals */
    if (r <= 3 && c <= 4) { /* bottom of an upright diagonal */
        console.log("checking diagonal going upright");
        tempSpotId = "spot" + String(c+1) + String(r+1);
        tempSpotId2 = "spot" + String(c+2) + String(r+2);
        tempSpotId3 = "spot" + String(c+3) + String(r+3);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        alert (theColor1 + theColor2 + theColor3 + colorTurn);
        if (theColor1 === theColor2 && theColor3 === colorTurn && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    if (r <= 3 && c >= 4) { /* bottom of an upright diagonal */
        console.log("checking diagonal going upleft");
        tempSpotId = "spot" + String(c-1) + String(r+1);
        tempSpotId2 = "spot" + String(c-2) + String(r+2);
        tempSpotId3 = "spot" + String(c-3) + String(r+3);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        alert (theColor1 + theColor2 + theColor3 + colorTurn);
        if (theColor1 === theColor2 && theColor3 === colorTurn && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    if (r >= 4 && c >= 4) { /* bottom of an downleft diagonal */
        console.log("checking diagonal going downleft");
        tempSpotId = "spot" + String(c-1) + String(r-1);
        tempSpotId2 = "spot" + String(c-2) + String(r-2);
        tempSpotId3 = "spot" + String(c-3) + String(r-3);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        alert (theColor1 + theColor2 + theColor3 + colorTurn);
        if (theColor1 === theColor2 && theColor3 === colorTurn && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    if (r >= 4 && c <= 4) { /* bottom of an downright diagonal */
        console.log("checking diagonal going downright");
        tempSpotId = "spot" + String(c+1) + String(r-1);
        tempSpotId2 = "spot" + String(c+2) + String(r-2);
        tempSpotId3 = "spot" + String(c+3) + String(r-3);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        alert (theColor1 + theColor2 + theColor3 + colorTurn);
        if (theColor1 === theColor2 && theColor3 === colorTurn && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    if (r >= 2 && c >= 2 && r <= 4 && c<= 5) { /* second on an upright diagonal */
        console.log("checking diagonal going upright");
        tempSpotId = "spot" + String(c-1) + String(r-1);
        tempSpotId2 = "spot" + String(c+1) + String(r+1);
        tempSpotId3 = "spot" + String(c+2) + String(r+2);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        alert (theColor1 + theColor2 + theColor3 + colorTurn);
        if (theColor1 === theColor2 && theColor3 === colorTurn && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    if (r >= 2 && c >= 3 && r <= 4 && c<= 6) { /* second on an upleft diagonal */
        console.log("checking diagonal going upleft");
        tempSpotId = "spot" + String(c+1) + String(r-1);
        tempSpotId2 = "spot" + String(c-1) + String(r+1);
        tempSpotId3 = "spot" + String(c-2) + String(r+2);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        alert (theColor1 + theColor2 + theColor3 + colorTurn);
        if (theColor1 === theColor2 && theColor3 === colorTurn && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    if (r >= 3 && c >= 2 && r <= 5 && c<= 5) { /* second on an downleft diagonal */
        console.log("checking diagonal going downleft");
        tempSpotId = "spot" + String(c+1) + String(r+1);
        tempSpotId2 = "spot" + String(c-1) + String(r-1);
        tempSpotId3 = "spot" + String(c-2) + String(r-2);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        alert (theColor1 + theColor2 + theColor3 + colorTurn);
        if (theColor1 === theColor2 && theColor3 === colorTurn && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
    if (r >= 3 && c >= 3 && r <= 5 && c<= 6) { /* second on an downright diagonal */
        console.log("checking diagonal going downleft");
        tempSpotId = "spot" + String(c-1) + String(r+1);
        tempSpotId2 = "spot" + String(c+1) + String(r-1);
        tempSpotId3 = "spot" + String(c+2) + String(r-2);
        theColor1 = document.getElementById(tempSpotId).style.backgroundColor;
        theColor2 = document.getElementById(tempSpotId2).style.backgroundColor;
        theColor3 = document.getElementById(tempSpotId3).style.backgroundColor;
        alert (theColor1 + theColor2 + theColor3 + colorTurn);
        if (theColor1 === theColor2 && theColor3 === colorTurn && theColor1 === theColor3) {
            alert("game over - " + colorTurn + " wins!");
            wait(3000);
            window.location.href = "https://www.google.com";
        }
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait() {
    await sleep(3000);  // Waits for 3 seconds
}


// animation stuff

// Register the plugin
gsap.registerPlugin(MotionPathPlugin);
//[_{{{CITATION{{{_1{Animating Elements Using the MotionPath Plugin - glivera-team.com](https://glivera-team.com/animating-elements-using-the-motionpath-plugin/)

let verticalPath = "M 100 100 V 300"; // Adjust as necessary[_{{{CITATION{{{_2{Motionpath - GSAP - GreenSock](https://gsap.com/community/forums/topic/38162-motionpath/)[_{{{CITATION{{{_1{Animating Elements Using the MotionPath Plugin - glivera-team.com](https://glivera-team.com/animating-elements-using-the-motionpath-plugin/)
//[_{{{CITATION{{{_2{Motionpath - GSAP - GreenSock](https://gsap.com/community/forums/topic/38162-motionpath/)

let horizontalPath = "M 100 100 H 300"; // Adjust as necessary
    /*In this path string:

    M 100 100 starts the path at the coordinates (100, 100).

    H 300 creates a horizontal line to the x-coordinate 300. */


function dropInFirstCol () {
    document.addEventListener("DOMContentLoaded", function() {
        gsap.to("#testingAnimation", {
          duration: 10,
          motionPath: {
            path: horizontalPath,
            align: "self",
            autoRotate: true
          },
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      });
}
