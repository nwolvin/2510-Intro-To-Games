class HighScoreDrawComponent extends Component {  
    drawGUI(ctx){
        this.text = GameObject.getObjectByName("scoreGameObject").getComponent("scoreTextController").highScore;
        ctx.textAlign = this.parent.textAlign;
        ctx.fillStyle = this.parent.hsFillStyle;
        ctx.font = this.parent.font
        ctx.fillText(this.text, this.transform.x , this.transform.y- EngineGlobals.logicalHeight/20);
    }
}

window.HighScoreDrawComponent = HighScoreDrawComponent;