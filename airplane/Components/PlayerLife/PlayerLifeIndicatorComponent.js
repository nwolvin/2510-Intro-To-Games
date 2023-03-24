class PlayerLifeIndicatorComponent extends Component {
    start() {
        this.transform.sx = 1/5
        this.transform.x = window.innerHeight/15 * this.idx + window.innerHeight/24;
        this.transform.y = window.innerHeight - window.innerHeight/28;
    }
    update() {
    }
}

window.PlayerLifeIndicatorComponent = PlayerLifeIndicatorComponent;