class MainScene extends Scene {
    start() {
        let plane = new PlaneGameObject();
        plane.name = "plane"; 
        plane.addComponent(new AddPlaneHitboxesController())

        let playerLifeGameObject = new GameObject(); 
        playerLifeGameObject.name = "playerLifeGameObject"
        let playerLifeController = new PlayerLifeController(3)
        playerLifeController.name = "playerLifeController"

        playerLifeGameObject.addComponent(playerLifeController)

        Cookie.setCookie("score", 0)
        let score1 =new ScoreGameObject("#121212", "#121212", EngineGlobals.logicalWidth/2 + EngineGlobals.logicalWidth/2 - EngineGlobals.logicalWidth/100 -3, EngineGlobals.logicalHeight/2 + EngineGlobals.logicalHeight/2 - EngineGlobals.logicalHeight/40
        , "right", "30pt Trebuchet MS", true, true, 0);
        score1.name = "scoreGameObject";
        let score2 =new ScoreGameObject("#121212", "#121212", EngineGlobals.logicalWidth/2 + EngineGlobals.logicalWidth/2 - EngineGlobals.logicalWidth/100+ 3, EngineGlobals.logicalHeight/2 + EngineGlobals.logicalHeight/2 - EngineGlobals.logicalHeight/40 
        , "right", "30pt Trebuchet MS", true, true, 0);
        score2.name = "scoreGameObject";
        let score3 =new ScoreGameObject("#121212", "#121212", EngineGlobals.logicalWidth/2 + EngineGlobals.logicalWidth/2 - EngineGlobals.logicalWidth/100, EngineGlobals.logicalHeight/2 + EngineGlobals.logicalHeight/2 - EngineGlobals.logicalHeight/40 -3
        , "right", "30pt Trebuchet MS", true, true, 0);
        score3.name = "scoreGameObject";
        let score4 =new ScoreGameObject("#121212", "#121212", EngineGlobals.logicalWidth/2 + EngineGlobals.logicalWidth/2 - EngineGlobals.logicalWidth/100, EngineGlobals.logicalHeight/2 + EngineGlobals.logicalHeight/2 - EngineGlobals.logicalHeight/40 +3
        , "right", "30pt Trebuchet MS", true, true, 0);
        score4.name = "scoreGameObject";
        let score5 =new ScoreGameObject("white", "yellow", EngineGlobals.logicalWidth/2 + EngineGlobals.logicalWidth/2 - EngineGlobals.logicalWidth/100, EngineGlobals.logicalHeight/2 + EngineGlobals.logicalHeight/2 - EngineGlobals.logicalHeight/40
        , "right", "30pt Trebuchet MS", true, true, 0);
        score5.name = "scoreGameObject";


        GameObject.instantiate(playerLifeGameObject);  
        let backGroundGameObject  = new GameObject().addComponent(new CameraFollowingBackground());
        backGroundGameObject.layer = -1;
        GameObject.instantiate(backGroundGameObject);
        GameObject.instantiate(new GameObject().addComponent(new AddCloudController()))

        GameObject.instantiate(plane)  
        GameObject.instantiate(new GameObject().addComponent(new ShootController()))
        GameObject.instantiate(new GameObject().addComponent(new AddTargetController()))
        GameObject.instantiate(score1)
        GameObject.instantiate(score2)
        GameObject.instantiate(score3)
        GameObject.instantiate(score4)
        GameObject.instantiate(score5)

        Camera.main.parent.addComponent(new PlaneFollowingCameraComponent());
    }
}

window.MainScene=MainScene;