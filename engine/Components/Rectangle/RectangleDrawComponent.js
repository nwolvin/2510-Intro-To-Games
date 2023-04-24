class RectangleDrawComponent extends Component {
    draw(ctx){
        ctx.fillStyle = this.parent.fillStyle; 
        ctx.fillRect(this.transform.x - this.parent.width/2, this.transform.y - this.parent.height/2, this.parent.width, this.parent.height);
    }
}

window.RectangleDrawComponent = RectangleDrawComponent;