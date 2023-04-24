class TargetComponent extends Component {
    start() {
        this.transform.x = this.parent.initX;
        this.transform.y = this.parent.initY;
    }
    update(){

    }
}
window.TargetComponent = TargetComponent;