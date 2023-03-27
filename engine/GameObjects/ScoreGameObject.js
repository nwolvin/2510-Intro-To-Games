class ScoreGameObject extends GameObject {
    start(){       
        this.score = 0;
        let scoreText = new TextGameObject("black", window.innerWidth/2, window.innerWidth/16, this.score, "center", "40pt Trebuchet MS");   
        scoreText.name = "scoreText";

        GameObject.instantiate(scoreText);
    }
}

window.ScoreGameObject = ScoreGameObject;