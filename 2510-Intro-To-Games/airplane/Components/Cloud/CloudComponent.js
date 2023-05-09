class CloudComponent extends Component {
    start() {
        this.transform.x = Camera.main.transform.x - EngineGlobals.logicalWidth/2 + EngineGlobals.logicalWidth*1/6+(Math.floor(Math.random() * (EngineGlobals.logicalWidth*2/3)));
        this.transform.y = Camera.main.transform.y - EngineGlobals.logicalHeight*5/8/3*2
        this.circleNum = 8
        this.colorNum = (Math.floor(Math.random() * 2))
        this.circles = []
        this.hitflag = true;

        let i = 0
        for (let i = 0; i < this.circleNum; i++){
            this.circles[i] = {rx: this.transform.x+Math.floor(Math.random() * 150), ry: this.transform.y+Math.floor(Math.random() * 50)};
        }
    }
    update() {
        if(Math.sqrt(((this.transform.y - Camera.main.transform.y)**2 + (this.transform.x - Camera.main.transform.x)**2)) > EngineGlobals.logicalHeight*6 && this.hitflag){
            this.hitflag = false
            this.parent.destroy()
        } else {
            this.transform.y +=60*Time.deltaTime;
        }
    }
}

window.CloudComponent = CloudComponent;