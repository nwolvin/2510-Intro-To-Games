class TargetComponent extends Component {
    start() {
       
        this.transform.x = this.parent.initX;
        this.transform.y = this.parent.initY;
        this.hover = false; 
        this.startTime = Time.secondsCount;
        this.completedTime = 0; 
    }
    update(){
        let targetTimers = GameObject.getObjectByName("aimScoreGameObject").getComponent("aimScoreComponent").targetTimers;
        let mouseX = Camera.screenToWorldSpace(Input.mouseX, Input.mouseY, canvas.getContext("2d")).x;
        let mouseY = Camera.screenToWorldSpace(Input.mouseX, Input.mouseY, canvas.getContext("2d")).y;

        if(mouseX > this.transform.x - this.parent.width/2 && mouseX < this.transform.x + this.parent.width/2 && Input.mouseDown && !this.parent.markedForDestroy){           
            this.updateListeners("TargetClicked")
            targetTimers.push(Time.secondsCount -  this.startTime);
            this.parent.destroy();
        }
    }
}
window.TargetComponent = TargetComponent;