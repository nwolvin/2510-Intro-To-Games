class PlaneGameObject extends GameObject {
    start(){
        this.rotate = 1
        //Plane Component        
        let planeComponent = new PlaneComponent(); 
        planeComponent.name ="planeComponent"; 
        this.addComponent(planeComponent);

        //Plane Propeller Component
        let planePropeller = new PlanePropellerController()
        planePropeller.name = "propeller"
        this.addComponent(planePropeller)

        //Plane Draw Component
        let planeDrawComponent = new PlaneDrawComponent(); 
        planeDrawComponent.name ="planeDrawComponent"; 
        planeDrawComponent.rotate = 1
        planeDrawComponent.propeller = this.getComponent("planeComponent").propeller;
        planeDrawComponent.canDrawFlag = true; 
        this.addComponent(planeDrawComponent);
        let hitbox1 = {
            x1Params: -120,
            y1Params: -70,
            x2Params: 120,
            y2Params: 0
        }
        let hitbox2 = {
            x1Params: -40,
            y1Params: -120,
            x2Params: 40,
            y2Params: 120
        }
        
        this.hitboxes.push(hitbox1)
        this.hitboxes.push(hitbox2)




        //this.addComponent(new AddHitboxesController())
        //Hitbox Component        
        let hitboxComponent = new HitboxControllerComponent(); 
        hitboxComponent.name ="planeHitbox"; 
        this.addComponent(hitboxComponent);

    }  
}

window.PlaneGameObject = PlaneGameObject;