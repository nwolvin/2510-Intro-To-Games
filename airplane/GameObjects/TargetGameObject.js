class TargetGameObject extends GameObject {
    start(){
        this.rotate = -1        

        let targetComponent = new TargetComponent(); 
        targetComponent.name = "target";
        this.addComponent(targetComponent);

        let enemyPlanePropeller = new PlanePropellerController()
        enemyPlanePropeller.name = "propeller"
        this.addComponent(enemyPlanePropeller)

        let enemyPlaneDraw = new EnemyPlaneDrawComponent()
        enemyPlaneDraw.rotate = -1
        enemyPlaneDraw.propeller = this.getComponent("propeller").propeller

       let hitbox1 = {
            x1Params: -120,
            y1Params: -70,
            x2Params: 120,
            y2Params: 0
        }
        let hitbox2 = {
            x1Params: -40,
            y1Params: -100,
            x2Params: 40,
            y2Params: 120
        }
        
        this.hitboxes.push(hitbox1)
        this.hitboxes.push(hitbox2)
        this.addComponent(new AddHitboxesController())

        this.addComponent(enemyPlaneDraw)
        this.addComponent(new EnemyShootController());
    }
}

window.TargetGameObject = TargetGameObject;