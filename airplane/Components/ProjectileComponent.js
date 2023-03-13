class ProjectileComponent extends Component {
    start() {
        this.transform.x = this.parent.x
        this.transform.y = this.parent.y
        this.rotate = this.parent.rotate
        this.transform.sx = GameObject.getObjectByName("plane").getComponent("planeComponent").transform.sx;
    }
    update() {
        if(this.transform.y > 2000 || this.transform.y < 0) {
           this.parent.destroy()
        } else {
            this.transform.y -= 10*this.rotate;
        }  
    }

}

window.ProjectileComponent=ProjectileComponent