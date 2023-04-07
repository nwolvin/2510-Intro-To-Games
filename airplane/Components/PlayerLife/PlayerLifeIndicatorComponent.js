class PlayerLifeIndicatorComponent extends Component {
    start() {
        this.transform.sx = 1/5
        this.transform.x = canvas.height/15 * this.idx + canvas.height/24;
        this.transform.y = canvas.height - canvas.height/28;
    }
    update() {
    }
}

window.PlayerLifeIndicatorComponent = PlayerLifeIndicatorComponent;