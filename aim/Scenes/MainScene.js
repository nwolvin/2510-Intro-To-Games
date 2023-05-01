class MainScene extends Scene {
    start() {
           
        let drawTimer = new GameObject(); 
        drawTimer.name = "drawTimer";
        drawTimer.addComponent(new TimerDrawComponent("40pt Trebuchet MS", "center", "white", Time.secondsCount));
        GameObject.instantiate(drawTimer);

        drawTimer.components[0].x = EngineGlobals.logicalWidth/2; 
        drawTimer.components[0].y = 0+EngineGlobals.logicalWidth/25;

        let aimScoreGameObject = new GameObject(); 
        aimScoreGameObject.name = "aimScoreGameObject";
        aimScoreGameObject.addComponent(new AimScoreComponent());
        GameObject.instantiate(aimScoreGameObject);
        
        let addTargetGameObject = new GameObject(); 
        addTargetGameObject.name = "addTargetGameObject";
        let addTargetComponent = new AddTargetComponent(Cookie.getCookie("targetNum")); 
        addTargetComponent.name = "addTargetComponent";
        addTargetGameObject.addComponent(addTargetComponent);
        GameObject.instantiate(addTargetGameObject)


        let scoreText =new TextGameObject("white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2 - EngineGlobals.logicalHeight/6, "0/"+addTargetComponent.targetsCount, "center", "30pt Trebuchet MS");

        GameObject.instantiate(scoreText)
        scoreText.components[0].x = EngineGlobals.logicalWidth - EngineGlobals.logicalWidth/12; 
        scoreText.components[0].y = 0+EngineGlobals.logicalWidth/25;
        scoreText.addComponent(new ScoreTextControllerComponent());

    }
}

window.MainScene=MainScene;