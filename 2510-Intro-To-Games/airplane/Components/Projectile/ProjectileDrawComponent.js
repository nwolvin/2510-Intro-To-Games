class ProjectileDrawComponent extends Component {
    draw(ctx){
        this.transform.x = this.parent.getComponent("projectile").transform.x
        this.transform.y = this.parent.getComponent("projectile").transform.y

        ctx.beginPath()
        ctx.fillStyle="white"
        ctx.ellipse(this.transform.x, this.transform.y, defScale*2, defScale*10, 0, 0, 2*Math.PI, true);
        ctx.fill()   
    }
}

window.ProjectileDrawComponent = ProjectileDrawComponent