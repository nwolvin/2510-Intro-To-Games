

let sceneIndex = 0 
let difficulty = 1

document.addEventListener("keyup",diffKeyUp)

let margin = canvas.height/3;
let xmargin = margin + (canvas.width - margin * 3)/2
let size = canvas.height/3;

let pongX = xmargin + Math.floor(Math.random() * size)
let pongY = margin + size / 2 - size/2
let pongVX = 1/2
let pongVY = 2

let pongX2 = xmargin + Math.floor(Math.random() * size)
let pongY2 = margin + size / 2 - size/2
let pongVX2 = 1/5
let pongVY2 = 2

let pongX3 = xmargin + Math.floor(Math.random() * size)
let pongY3 = margin + size / 2 - size/2
let pongVX3 = 1/7
let pongVY3 = 3

let paddleX = xmargin + size / 2
let paddleWidth = xmargin*difficulty
let difficultyString = ""
let score = 0
let isPaused = false
let highScore = 0; 

function diffKeyUp(e)
{
    if(sceneIndex == 0 || sceneIndex == 2) {
        if(e.key == 1 || e.key == 2 || e.key == 3) {
            if(e.key == 1) {
                difficulty = 1/3
                difficultyString = "EASY PONG"
            }
            if(e.key == 2) {
                difficulty = 2/9
                difficultyString = "MEDIUM PONG"
            }
            if(e.key == 3) {
                difficulty = 1/9
                difficultyString = "HARD PONG"
            }
                
                resetVars(); 
                sceneIndex =1
        }

    } else if (sceneIndex == 1){
            keysDown[e.key] = false
        if(e.key =="p") {
            isPaused = !isPaused
        }
    } else {

    }
}

function resetVars() {
    margin = canvas.height/3
    xmargin = margin + (canvas.width - margin * 3)/2
    size = canvas.height/3
    pongX = xmargin + Math.floor(Math.random() * size)
    pongY = margin + size / 2 - size/2
    pongX2 = xmargin + Math.floor(Math.random() * size)
    pongY2 = margin + size / 2 - size/2
    pongX3 = xmargin + Math.floor(Math.random() * size)
    pongY3 = margin + size / 2 - size/2
    pongVX = 5
    pongVY = 2
    pongVX2 = 1
    pongVY2 = 3/2
    pongVX3 = -2
    pongVY3 = 5/3
    paddleX = xmargin + size / 2
    paddleWidth = xmargin*difficulty
    score = 0
    isPaused = false

    if(sessionStorage.getItem("highScore") != null) {
        highScore = sessionStorage.getItem("highScore"); 
    }

    keysDown["ArrowLeft"] = false; 
    keysDown["ArrowRight"] = false; 
    keysDown["a"] = false; 
    keysDown["d"] = false; 
}

function update() {
   
    switch(sceneIndex) {
        case 1:
            //Model of MVC
            pongX += pongVX
            pongY += pongVY

            if (pongX > xmargin + size) {
                pongVX *= -1
            }
            if (pongY > margin + size) {
                if(pongX > paddleX - paddleWidth/2 && pongX < paddleX + paddleWidth/2) {
                    pongVY = -Math.abs(pongVY)
                    score++
                } else {
                    sceneIndex = 2
                }
                
            }
            if (pongX < xmargin) {
                pongVX *= -1
            }
            if (pongY < margin) {
                pongVY *= -1
            }

            pongX2 += pongVX2
            pongY2 += pongVY2

            if (pongX2 > xmargin + size) {
                pongVX2 *= -1
            }
            if (pongY2 > margin + size) {
                if(pongX2 > paddleX - paddleWidth/2 && pongX2 < paddleX + paddleWidth/2) {
                    pongVY2 = -Math.abs(pongVY2)
                    score++
                } else {
                    sceneIndex = 2
                }
                
            }
            if (pongX2 < xmargin) {
                pongVX2 *= -1
            }
            if (pongY < margin) {
                pongVY2 *= -1
            }

            pongX3 += pongVX3
            pongY3 += pongVY3

            if (pongX3 > xmargin + size) {
                pongVX3 *= -1
            }
            if (pongY3 > margin + size) {
                if(pongX3 > paddleX - paddleWidth/2 && pongX3 < paddleX + paddleWidth/2) {
                    pongVY3 = -Math.abs(pongVY3)
                    score++
                } else {
                    sceneIndex = 2
                }
                
            }
            if (pongX3 < xmargin) {
                pongVX3 *= -1
            }
            if (pongY < margin) {
                pongVY3 *= -1
            }


            //Pull the keyboard state and move paddle
            if(keysDown["ArrowRight"] || keysDown["d"]){
                paddleX +=6
            }
            if(keysDown["ArrowLeft"] || keysDown["a"]){
                paddleX -=6
            }
            if(paddleX - paddleWidth/2<xmargin) {
                paddleX = xmargin + paddleWidth /2 ; 
            }
            if(paddleX + paddleWidth/2 >size + xmargin){
                paddleX = size + xmargin - paddleWidth/2; 
            }
            break; 
        default:
            break;
    }
}

function draw() {
    switch(sceneIndex) {
        case 0:
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            //View part of MVC
            ctx.fillStyle = "salmon"
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = "white"
            ctx.textAlign = 'center';
            ctx.font = "100px serif";
            ctx.fillText("PONG", canvas.width/2, canvas.height/2)
            drawDifficultyText("begin"); 
            break;
        case 1:
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            //View part of MVC
            ctx.fillStyle = "lightgreen"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.strokeStyle = "black"
            ctx.beginPath()

            ctx.moveTo(xmargin, margin)
            ctx.lineTo(xmargin + size, margin)
            ctx.lineTo(xmargin + size, margin + size)
            ctx.moveTo(xmargin, margin + size)
            ctx.lineTo(xmargin, margin)
            ctx.stroke()

            ctx.fillStyle = "blue"

            ctx.beginPath()
            ctx.arc(pongX, pongY, 5, 0, Math.PI * 2)
            ctx.fill()

            ctx.fillStyle = "red"
            ctx.beginPath()
            ctx.arc(pongX2, pongY2, 5, 0, Math.PI * 2)
            ctx.fill()

            ctx.fillStyle = "yellow"
            ctx.beginPath()
            ctx.arc(pongX3, pongY3, 5, 0, Math.PI * 2)
            ctx.fill()

            ctx.beginPath()
            ctx.moveTo(paddleX - paddleWidth / 2, size + margin)
            ctx.lineTo(paddleX + paddleWidth / 2, size + margin)
            ctx.stroke()

            ctx.textAlign = "center"
            ctx.fillStyle = "black"
            ctx.font = "60pt serif";
            ctx.fillText(difficultyString, canvas.width/2, margin - margin/2)
            ctx.font = "30pt serif";
            ctx.fillText("SCORE: " +score, canvas.width/2, margin + size + margin/4)
            ctx.fillText("HIGH SCORE: "+highScore, canvas.width/2, margin - margin/6)
            break; 
        default: 
            if(score > highScore) {
                sessionStorage.setItem("highScore", score);
            }
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            //View part of MVC

            ctx.fillStyle = "BLACK"
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = "white"
            ctx.textAlign = 'center';
            ctx.font = "60px serif";
            ctx.fillText("GAME OVER... SCORE: "+score, canvas.width/2, canvas.height/2)
            drawDifficultyText("retry"); 
           
            break; 
    }

    function drawPauseScreen() {
        ctx.fillStyle = "black"
        ctx.textAlign = 'center';
        ctx.font = "70px serif";
        ctx.fillText("PAUSED", canvas.width/2, canvas.height/2)
        ctx.font = "30px serif";
        ctx.fillText("Press p to continue.", canvas.width/2, canvas.height - canvas.height*3/7)
    }

    function drawDifficultyText(str) {
        ctx.font = "30px serif";
        ctx.fillText("To "+str+" please choose a difficulty. Press:", canvas.width/2, canvas.height - canvas.height*6/14)
        ctx.fillText("1 - Easy      ", canvas.width/2, canvas.height - canvas.height*5/14)
        ctx.fillText("2 - Medium", canvas.width/2, canvas.height - canvas.height*4/14)
        ctx.fillText("3 - Hard     ", canvas.width/2, canvas.height - canvas.height*3/14)
    }

}