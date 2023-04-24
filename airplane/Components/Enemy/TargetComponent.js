class TargetComponent extends Component {
    start() {
        this.transform.x = Camera.main.transform.x - EngineGlobals.logicalWidth/2 + EngineGlobals.logicalWidth*1/6+(Math.floor(Math.random() * (EngineGlobals.logicalWidth*2/3))); 
        this.transform.y = Camera.main.transform.y - EngineGlobals.logicalHeight
        this.direction = (Math.floor(Math.random() * 2)); 
        this.directionTime = 0;
        this.drawTime = 0; 
        this.startDraw = false; 
        this.xSpeed = Math.floor(Math.random() * 40) + 15
        this.directionTime = Math.ceil(Time.fpsTarget/3 + Math.floor(Math.random() * (Time.fpsTarget*5/3)));
        this.hitflag = true
    }
    update() {
        if( this.drawTime == 10){
            this.startDraw = true; 
        } else {
            this.drawTime++;
        }

        if( this.directionTime == 0){
            this.direction = (Math.floor(Math.random() * 2)); 
            this.directionTime = Math.ceil(Time.fpsTarget/3 + Math.floor(Math.random() * (Time.fpsTarget*5/3))); 
        } else {
            this.directionTime--
        }
        
        if((Math.abs(this.transform.y - Camera.main.transform.y)>EngineGlobals.logicalHeight*5/3) && this.hitflag){
            this.hitflag = false
            this.parent.destroy()
         
        } else {
            this.transform.y +=150*Time.deltaTime;
            if(this.direction == 0) {
                this.transform.x +=this.xSpeed*Time.deltaTime;
            } else {
                this.transform.x -=this.xSpeed*Time.deltaTime;
            }
        }
    }
}

window.TargetComponent = TargetComponent;