class ScoreDrawComponent extends Component {  
    drawGUI(ctx){
        this.text = GameObject.getObjectByName("scoreGameObject").getComponent("scoreTextController").score;
        ctx.textAlign = this.parent.textAlign;
        ctx.fillStyle = this.parent.fillStyle;
        ctx.font = this.parent.font

        ctx.fillText(this.text, this.transform.x, this.transform.y);
    }
}

window.ScoreDrawComponent = ScoreDrawComponent;