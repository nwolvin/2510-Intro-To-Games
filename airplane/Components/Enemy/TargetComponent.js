class TargetComponent extends Component {
    start() {
        this.transform.sx = GameObject.getObjectByName("plane").getComponent("planeDrawComponent").transform.sx;
        this.transform.x = window.innerWidth*1/6+(Math.floor(Math.random() * (window.innerWidth*2/3))); 
        this.transform.y = -300
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