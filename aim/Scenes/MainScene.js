class MainScene extends Scene {
    start() {
        let aimScoreGameObject = new GameObject(); 
        aimScoreGameObject.name = "aimScoreGameObject";
        aimScoreGameObject.addComponent(new AimScoreComponent());
        GameObject.instantiate(aimScoreGameObject);
        
        let addTargetGameObject = new GameObject(); 
        addTargetGameObject.name = "addTargetGameObject";
        let addTargetComponent = new AddTargetComponent(); 
        addTargetComponent.name = "addTargetComponent";
        addTargetGameObject.addComponent(addTargetComponent);
        GameObject.instantiate(addTargetGameObject)



    }
}

window.MainScene=MainScene;