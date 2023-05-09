class ScoreGameObject extends GameObject {
    constructor(fillStyle, hsFillStyle, x, y, textAlign, font, showScore, showHighScore, defScore) {
        super();
        this.fillStyle = fillStyle;
        this.hsFillStyle = hsFillStyle;
        this.x = x;
        this.y = y;
        this.textAlign = textAlign;
        this.font = font;
        this.showScore = showScore; 
        this.showHighScore = showHighScore
        this.score = defScore; 
    }
    start(){       
        if(Cookie.getCookie("highScore") !== "") {
            this.highScore = Cookie.getCookie("highScore");
        } else {
            this.highScore = 0;
        } 
       
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