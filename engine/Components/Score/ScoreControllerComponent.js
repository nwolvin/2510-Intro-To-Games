class ScoreControllerComponent extends Component {
    start(){
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
            sessionStorage.setItem("score", this.score);
            if(this.score > this.highScore){
                this.highScore = this.score; 
                sessionStorage.setItem("highScore", this.highScore);
            }
        }
    }
  }
window.ScoreControllerComponent=ScoreControllerComponent