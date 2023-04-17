class ProjectileComponent extends Component {
    start() {
        this.transform.x = this.parent.x
        this.transform.y = this.parent.y
        this.rotate = this.parent.rotate
       this.hitflag = true
        
    }
    update() {
      
     
        if((Math.abs(this.transform.y - Camera.main.transform.y)>EngineGlobals.logicalHeight*5/3) && this.hitflag){
            this.hitflag = false
            this.parent.destroy()
        } else {
            this.transform.y -= 300*this.rotate*Time.deltaTime;
        }
    }

}

window.ProjectileComponent=ProjectileComponent