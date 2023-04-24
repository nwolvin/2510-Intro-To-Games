class RectangleComponent extends Component {
    start(){
        this.transform.x = this.parent.x;
        this.transform.y = this.parent.y;
    }
    update(){

    }
}

window.RectangleComponent = RectangleComponent;