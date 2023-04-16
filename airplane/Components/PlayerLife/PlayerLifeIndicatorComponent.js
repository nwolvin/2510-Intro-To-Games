class PlayerLifeIndicatorComponent extends Component {
    start() {
        //this.transform.sx = 1/5
        this.transform.x =  0 - EngineGlobals.logicalWidth/2 + EngineGlobals.logicalWidth/34 + (EngineGlobals.logicalWidth/26 * this.idx);
        this.transform.y = 0 + EngineGlobals.logicalHeight/2 - EngineGlobals.logicalWidth/40
    }
    update() {
    }
}

window.PlayerLifeIndicatorComponent = PlayerLifeIndicatorComponent;