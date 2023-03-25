class TextBoxRectangleComponent extends Component {
    draw(ctx){
        ctx.fillStyle = this.parent.rectFillStyle; 
        ctx.fillRect(this.transform.x - this.parent.height*2/2, this.transform.y - this.parent.height/2, this.parent.height*2, this.parent.height);
    }
}

window.TextBoxRectangleComponent = TextBoxRectangleComponent;