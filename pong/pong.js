
let difficulty = 1
let difficultyString = ""
let score = 0
let isPaused = false
let highScore = 0; 

class StartScene extends Scene {
    start(){

    }
    update() {      
        difficultySelect(); 
            
          


    }
    draw(ctx) {
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
    }

}

class MainScene extends Scene {
    start() {
        this.margin = canvas.height/3;
        this.xmargin = this.margin + (canvas.width - this.margin * 3)/2
        this.size = canvas.height/3;
        
        this.pongX = this.xmargin + Math.floor(Math.random() * this.size)
        this.pongY = this.margin + this.size / 2 - this.size/2
        this.pongVX = 1/2
        this.pongVY = 2
        
        this.pongX2 = this.xmargin + Math.floor(Math.random() * this.size)
        this.pongY2 = this.margin + this.size / 2 - this.size/2
        this.pongVX2 = 1/5
        this.pongVY2 = 2
        
        this.pongX3 = this.xmargin + Math.floor(Math.random() * this.size)
        this.pongY3 = this.margin + this.size / 2 - this.size/2
        this.pongVX3 = 1/7
        this.pongVY3 = 3
        
        this.paddleX = this.xmargin + this.size / 2
        this.paddleWidth = this.xmargin*difficulty
    }
    update() {
        //Model of MVC
        this.pongX += this.pongVX
        this.pongY += this.pongVY

        if (this.pongX > this.xmargin + this.size) {
            this.pongVX *= -1
        }
        if (this.pongY > this.margin + this.size) {
            if(this.pongX > this.paddleX - this.paddleWidth/2 && this.pongX < this.paddleX + this.paddleWidth/2) {
                this.pongVY = -Math.abs(this.pongVY)
                score++
            } else {
                SceneManager.changeScene(2);
            }
            
        }
        if (this.pongX < this.xmargin) {
            this.pongVX *= -1
        }
        if (this.pongY < this.margin) {
            this.pongVY *= -1
        }

        this.pongX2 += this.pongVX2
        this.pongY2 += this.pongVY2

        if (this.pongX2 > this.xmargin + this.size) {
            this.pongVX2 *= -1
        }
        if (this.pongY2 > this.margin + this.size) {
            if(this.pongX2 > this.paddleX - this.paddleWidth/2 && this.pongX2 < this.paddleX + this.paddleWidth/2) {
                this.pongVY2 = -Math.abs(this.pongVY2)
                score++
            } else {
                SceneManager.changeScene(2);
            }
            
        }
        if (this.pongX2 < this.xmargin) {
            this.pongVX2 *= -1
        }
        if (this.pongY < this.margin) {
            this.pongVY2 *= -1
        }

        this.pongX3 += this.pongVX3
        this.pongY3 += this.pongVY3

        if (this.pongX3 > this.xmargin + this.size) {
            this.pongVX3 *= -1
        }
        if (this.pongY3 > this.margin + this.size) {
            if(this.pongX3 > this.paddleX - this.paddleWidth/2 && this.pongX3 < this.paddleX + this.paddleWidth/2) {
                this.pongVY3 = -Math.abs(this.pongVY3)
                score++
            } else {
                SceneManager.changeScene(2);
            }
            
        }
        if (this.pongX3 < this.xmargin) {
            this.pongVX3 *= -1
        }
        if (this.pongY < this.margin) {
            this.pongVY3 *= -1
        }


        //Pull the keyboard state and move this.paddle
        if(keysDown["ArrowRight"] || keysDown["d"]){
            this.paddleX +=6
        }
        if(keysDown["ArrowLeft"] || keysDown["a"]){
            this.paddleX -=6
        }
        if(this.paddleX - this.paddleWidth/2<this.xmargin) {
            this.paddleX = this.xmargin + this.paddleWidth /2 ; 
        }
        if(this.paddleX + this.paddleWidth/2 >this.size + this.xmargin){
            this.paddleX = this.size + this.xmargin - this.paddleWidth/2; 
        }
    }
    draw(ctx) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        //View part of MVC

        ctx.fillStyle = "lightgreen"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        ctx.strokeStyle = "black"
        ctx.beginPath()

        ctx.moveTo(this.xmargin, this.margin)
        ctx.lineTo(this.xmargin + this.size, this.margin)
        ctx.lineTo(this.xmargin + this.size, this.margin + this.size)
        ctx.moveTo(this.xmargin, this.margin + this.size)
        ctx.lineTo(this.xmargin, this.margin)
        ctx.stroke()

        ctx.fillStyle = "blue"

        ctx.beginPath()
        ctx.arc(this.pongX, this.pongY, 5, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.arc(this.pongX2, this.pongY2, 5, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "yellow"
        ctx.beginPath()
        ctx.arc(this.pongX3, this.pongY3, 5, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(this.paddleX - this.paddleWidth / 2, this.size + this.margin)
        ctx.lineTo(this.paddleX + this.paddleWidth / 2, this.size + this.margin)
        ctx.stroke()

        ctx.textAlign = "center"
        ctx.fillStyle = "black"
        ctx.font = "60pt serif";
        ctx.fillText(difficultyString, canvas.width/2, this.margin - this.margin/2)
        ctx.font = "30pt serif";
        ctx.fillText("SCORE: " +score, canvas.width/2, this.margin + this.size + this.margin/4)
        ctx.fillText("HIGH SCORE: "+highScore, canvas.width/2, this.margin - this.margin/6)

        if(isPaused) {
            drawPauseScreen()
        }
    }
}

class EndScene extends Scene {
    update() {
        difficultySelect();
    }
    draw(ctx) {
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
    }
}

document.addEventListener("keyup",diffKeyUp)





function diffKeyUp(e)
{
     if (SceneManager.currentSceneIndex == 1){
            keysDown[e.key] = false
        if(e.key =="p") {
            isPaused = !isPaused
        }
    } 
}

function difficultySelect() {
    if(SceneManager.currentSceneIndex == 0 || SceneManager.currentSceneIndex == 2) {
        if (keysDown["1"]){
            difficulty = 1/3
            difficultyString = "EASY PONG"
            resetVars(); 
            SceneManager.changeScene(1);
        }
        if(keysDown["2"]) {
            difficulty = 2/9
            difficultyString = "MEDIUM PONG"
            resetVars(); 
            SceneManager.changeScene(1);
        }
        if(keysDown["3"]) {
            difficulty = 1/9
            difficultyString = "HARD PONG"
            resetVars(); 
            SceneManager.changeScene(1);
        }
    }
   
}

function resetVars() {
    this.margin = canvas.height/3
    this.xmargin = this.margin + (canvas.width - this.margin * 3)/2
    this.size = canvas.height/3
    this.pongX = this.xmargin + Math.floor(Math.random() * this.size)
    this.pongY = this.margin + this.size / 2 - this.size/2
    this.pongX2 = this.xmargin + Math.floor(Math.random() * this.size)
    this.pongY2 = this.margin + this.size / 2 - this.size/2
    this.pongX3 = this.xmargin + Math.floor(Math.random() * this.size)
    this.pongY3 = this.margin + this.size / 2 - this.size/2
    this.pongVX = 5
    this.pongVY = 2
    this.pongVX2 = 1
    this.pongVY2 = 3/2
    this.pongVX3 = -2
    this.pongVY3 = 5/3
    this.paddleX = this.xmargin + this.size / 2
    this.paddleWidth = this.xmargin*difficulty
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

let startScene = new StartScene()
let mainScene = new MainScene()
let endScene = new EndScene()

SceneManager.addScene(startScene)
SceneManager.addScene(mainScene)
SceneManager.addScene(endScene)

