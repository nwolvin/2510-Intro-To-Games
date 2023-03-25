class TextComponent extends Component {
    draw(ctx){
        ctx.textAlign = this.parent.textAlign;
        ctx.fillStyle = this.parent.fillStyle;
        ctx.font = this.parent.font
        ctx.fillText(this.parent.text, this.transform.x, this.transform.y);
    }
}

window.TextComponent = TextComponent;