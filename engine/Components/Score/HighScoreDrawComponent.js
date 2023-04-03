class HighScoreDrawComponent extends Component {  
    draw(ctx){
        this.text = GameObject.getObjectByName("scoreGameObject").getComponent("scoreTextController").highScore;
        ctx.textAlign = this.parent.textAlign;
        ctx.fillStyle = this.parent.hsFillStyle;
        ctx.font = this.parent.font
        ctx.fillText(this.text, this.transform.x , this.transform.y- window.innerHeight/16);
    }
}

window.HighScoreDrawComponent = HighScoreDrawComponent;