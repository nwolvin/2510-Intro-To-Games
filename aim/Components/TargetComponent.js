class TargetComponent extends Component {
    start() {
        this.transform.x = this.parent.initX;
        this.transform.y = this.parent.initY;
        this.hover = false; 
    }
    update(){
        let mouseX = Camera.screenToWorldSpace(Input.mouseX, Input.mouseY, canvas.getContext("2d")).x;
        let mouseY = Camera.screenToWorldSpace(Input.mouseX, Input.mouseY, canvas.getContext("2d")).y;
        console.log(mouseX, mouseY)

        if(mouseX > this.transform.x - this.parent.width/2 && mouseX < this.transform.x + this.parent.width/2){
            console.log("HOVER")
        }
    }
}
window.TargetComponent = TargetComponent;