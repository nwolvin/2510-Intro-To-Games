class CloudComponent extends Component {
    start() {
        this.transform.x = 0 - logicalWidth/2 + (Math.floor(Math.random() * (logicalWidth*2/3))); 
        this.transform.y = 0 - logicalHeight/3 
        this.circleNum = 8
        this.colorNum = (Math.floor(Math.random() * 2))
        this.circles = []

        let i = 0
        for (let i = 0; i < this.circleNum; i++){
            this.circles[i] = {rx: this.transform.x+Math.floor(Math.random() * 150), ry: this.transform.y+Math.floor(Math.random() * 50)};
        }
    }
    update() {
        if(this.transform.y > 2000) {
            this.parent.destroy()
        } else {
            this.transform.y +=2;
        }
    }
}

window.CloudComponent = CloudComponent;