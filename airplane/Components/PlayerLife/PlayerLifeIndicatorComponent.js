class PlayerLifeIndicatorComponent extends Component {
    start() {
        //this.transform.sx = 1/5
        this.transform.x =  0 - logicalWidth/2 + logicalWidth/34 + (logicalWidth/26 * this.idx);
        this.transform.y = 0 + logicalHeight/2 - logicalWidth/40
    }
    update() {
    }
}

window.PlayerLifeIndicatorComponent = PlayerLifeIndicatorComponent;