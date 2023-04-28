class RectangleComponent extends Component {
    start(){
        this.components[0].x = 1000000000;
        this.components[0].y = 1000000000;
    }
    update(){
        this.transform.x = this.parent.x;
        this.transform.y = this.parent.y;
    }
}

window.RectangleComponent = RectangleComponent;