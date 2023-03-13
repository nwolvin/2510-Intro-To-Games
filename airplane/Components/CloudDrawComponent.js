class CloudDrawComponent extends Component {
    draw(ctx){  
        this.transform.x = this.parent.getComponent("cloud").transform.x
        this.transform.y = this.parent.getComponent("cloud").transform.y
        this.transform.sx = this.parent.getComponent("cloud").transform.sx
        this.circles = this.parent.getComponent("cloud").circles
        this.circleNum = this.parent.getComponent("cloud").circleNum

        ctx.fillStyle = "white";
        for(let i = 0; i < this.circleNum; i++){
            ctx.beginPath();
            ctx.arc(this.transform.x+this.circles[i].rx, this.transform.y+this.circles[i].ry, 50, 0, Math.PI * 2)
            ctx.fill()
        }
    }
}

window.CloudDrawComponent = CloudDrawComponent;