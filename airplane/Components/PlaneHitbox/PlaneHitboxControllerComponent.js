class PlaneHitboxControllerComponent extends Component {
    start() {
       
        this.x1 = this.x1Params; 
        this.y1 = this.y1Params;
        this.x2 = this.x2Params;
        this.y2 = this.y2Params;
        
        //Draws PlaneHitboxes
        /*let hitBoxDrawComponent = new PlaneHitboxDrawComponent();
        hitBoxDrawComponent.idx = this.idx; 
        this.parent.addComponent(hitBoxDrawComponent)*/

    }
    update() {
        this.x1 = this.x1Params * defScale * this.parent.rotate + this.transform.x; 
        this.y1 = this.y1Params * defScale * this.parent.rotate + this.transform.y
        this.x2 = this.x2Params * defScale * this.parent.rotate + this.transform.x; 
        this.y2 = this.y2Params * defScale * this.parent.rotate + this.transform.y

        let playerProjectiles = GameObject.getObjectsByName("playerProjectile");
        let enemyProjectiles = GameObject.getObjectsByName("enemyProjectile");

        if(this.parent.name == "target") {
            for(let projectile of playerProjectiles) {
                let px = projectile.getComponent("projectile").transform.x
                let py = projectile.getComponent("projectile").transform.y
                
                if(!this.parent.markedForDestroy){
                    if(px < this.x1 && px > this.x2 && py < this.y1 && py > this.y2) {
                        this.updateListeners("TargetHit")
                        this.parent.destroy()
                    }
                }
                
                
            }
        } 

        if(this.parent.name == "plane"){
            for(let projectile of enemyProjectiles) {
                let px = projectile.getComponent("projectile").transform.x
                let py = projectile.getComponent("projectile").transform.y
                    if(px > this.x1 && px < this.x2 && py > this.y1 && py < this.y2) {
                        this.updateListeners("PlayerHit")
                    }   
            }  
        }
    }
}

window.PlaneHitboxControllerComponent = PlaneHitboxControllerComponent;