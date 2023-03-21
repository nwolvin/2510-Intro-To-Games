class TextComponent extends Component {
    draw(ctx){
        ctx.textAlign = this.textAlign;
        ctx.fillStyle = this.fillStyle;
        ctx.font = this.font; 
        ctx.fillText( this.text, this.transform.x, this.transform.y)
    }
}

window.TextComponent = TextComponent;