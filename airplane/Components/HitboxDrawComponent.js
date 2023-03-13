class HitboxDrawComponent extends Component {
    draw(ctx) {    
        let htbx = this.parent.components.find(Component=>Component.idx == this.idx)
        this.x1 = htbx.x1; 
        this.y1 = htbx.y1;
        this.x2 = htbx.x2;
        this.y2 = htbx.y2;

        //draw ocean
        ctx.fillStyle = "red";
        ctx.fillRect(this.x1, this.y1, this.x2 - this.x1, this.y2-this.y1)
    }
}

window.HitboxDrawComponent = HitboxDrawComponent;