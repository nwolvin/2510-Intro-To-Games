class PlayerLifeIndicatorComponent extends Component {
    start() {
        this.transform.sx = 1/5
        this.transform.x =  canvas.width/12 + (canvas.width/30 * this.idx);
        this.transform.y = canvas.height - canvas.height/10;
    }
    update() {
    }
}

window.PlayerLifeIndicatorComponent = PlayerLifeIndicatorComponent;