class MainScene extends Scene {
    start() {
        let drawTimer = new GameObject(); 
        drawTimer.name = "drawTimer";
        drawTimer.addComponent(new TimerDrawComponent("40pt Trebuchet MS", "center", "white", Time.secondsCount));
        GameObject.instantiate(drawTimer);

        drawTimer.components[0].x = EngineGlobals.logicalWidth/2; 
        drawTimer.components[0].y = 0;

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