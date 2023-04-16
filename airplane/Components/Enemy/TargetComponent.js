class TargetComponent extends Component {
    start() {
        this.transform.x = 0 - EngineGlobals.logicalWidth/2 + EngineGlobals.logicalWidth*1/6+(Math.floor(Math.random() * (EngineGlobals.logicalWidth*2/3))); 
        this.transform.y = 0 - EngineGlobals.logicalHeight
        this.direction = (Math.floor(Math.random() * 2)); 
        this.directionTime = 0;
        this.drawTime = 0; 
        this.startDraw = false; 
    }
    update() {
        if( this.drawTime == 10){
            this.startDraw = true; 
        } else {
            this.drawTime++;
        }
        
        if( this.directionTime == 0){
            this.direction = (Math.floor(Math.random() * 2)); 
            this.directionTime = 10 + Math.floor(Math.random() * 50)
        } else {
            this.directionTime--
        }
        
        if(this.transform.y > 2000) {
          this.parent.destroy()
        } else {
            this.transform.y +=5;
            if(this.direction == 0) {
                this.transform.x +=1;
            } else {
                this.transform.x -=1;
            }
        }
    }
}

window.TargetComponent = TargetComponent;