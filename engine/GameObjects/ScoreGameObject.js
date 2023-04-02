class ScoreGameObject extends GameObject {
    constructor(fillStyle, hsFillStyle, x, y, textAlign, font, showScore, showHighScore) {
        super();
        this.fillStyle = fillStyle;
        this.hsFillStyle = hsFillStyle;
        this.x = x;
        this.y = y;
        this.textAlign = textAlign;
        this.font = font;
        this.showScore = showScore; 
        this.showHighScore = showHighScore
    }
    start(){       
        if(sessionStorage.getItem("highScore")) {
            this.highScore = sessionStorage.getItem("highScore"); 
        } else {
            this.highScore = 0;
        } 

        console.log(SceneManager.getActiveScene())
        this.score = 0;
       
        let textController = new ScoreControllerComponent(); 
        textController.name = "scoreTextController"; 
        this.addComponent(textController);

        if(this.showScore){
            this.addComponent(new ScoreDrawComponent());
        }
        if(this.showHighScore){
            this.addComponent(new HighScoreDrawComponent());
        }
        
       

    }
}

window.ScoreGameObject = ScoreGameObject;