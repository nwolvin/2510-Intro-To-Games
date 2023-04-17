class ProjectileComponent extends Component {
    start() {
        this.transform.x = this.parent.x
        this.transform.y = this.parent.y
        this.rotate = this.parent.rotate
        
    }
    update() {
        let plane = GameObject.getObjectByName("plane").getComponent("planeComponent");
        console.log(plane.transform.y)
        if(this.transform.y > plane.transform.y + EngineGlobals.logicalHeight || this.transform.y < plane.transform.y - EngineGlobals.logicalHeight) {
           
           console.log("DESTROY")
           
           
            this.parent.destroy()
        } else {
            this.transform.y -= 300*this.rotate*Time.deltaTime;
        }  
    }

}

window.ProjectileComponent=ProjectileComponent