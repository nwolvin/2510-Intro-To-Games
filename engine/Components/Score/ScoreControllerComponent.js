class ScoreControllerComponent extends Component {
    start(){
        setCookie("score", 0);    
        this.score = this.parent.score; 
        this.highScore = this.parent.highScore; 
        this.transform.x = this.parent.x;
        this.transform.y = this.parent.y;
    }
    update(){  

    }

    handleUpdate(component, eventName){
        if(eventName == "TargetHit"){
            this.score++;
            setCookie("score", this.score);
            if(this.score > this.highScore){
                this.highScore = this.score; 
                setCookie("highScore", this.highScore); 
            }
        }
    }
  }
window.ScoreControllerComponent=ScoreControllerComponent