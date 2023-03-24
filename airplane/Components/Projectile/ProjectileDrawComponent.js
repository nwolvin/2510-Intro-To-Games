class ProjectileDrawComponent extends Component {
    draw(ctx){
        this.transform.x = this.parent.getComponent("projectile").transform.x
        this.transform.y = this.parent.getComponent("projectile").transform.y
        this.transform.sx = this.parent.getComponent("projectile").transform.sx

        ctx.beginPath()
        ctx.fillStyle="white"
        ctx.ellipse(this.transform.x, this.transform.y, this.transform.sx*2, this.transform.sx*10, 0, 0, 2*Math.PI, true);
        //ctx.ellipse(this.transform.x, this.transform.y ,this.transform.sx, this.transform.sx, 0, 0, Math.PI, false);
        ctx.fill()   
    }
}

window.ProjectileDrawComponent = ProjectileDrawComponent