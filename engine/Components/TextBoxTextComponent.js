class TextBoxTextComponent extends Component {
    draw(ctx){
        ctx.textAlign = this.textAlign;
        ctx.fillStyle = this.parent.textFillStyle;
        ctx.font = this.parent.font; 
        ctx.fillText( this.parent.text, this.transform.x - this.parent.height/2, this.transform.y + (this.parent.height/9))
    }
}

window.TextBoxTextComponent = TextBoxTextComponent;