class MainScene extends Scene {
    start() {
        let plane = new PlaneGameObject();
        plane.name = "plane"; 
        plane.addComponent(new AddHitboxesController())

        let playerLifeGameObject = new GameObject(); 
        playerLifeGameObject.name = "playerLifeGameObject"
        let playerLifeController = new PlayerLifeController(2)
        playerLifeController.name = "playerLifeController"

        playerLifeGameObject.addComponent(playerLifeController)

        setCookie("score", 0)
        let score1 =new ScoreGameObject("#121212", "#121212", canvas.width - canvas.width/50 -3, canvas.height - canvas.height/40
        , "center", "30pt Trebuchet MS", true, true, 0);
        score1.name = "scoreGameObject";
        let score2 =new ScoreGameObject("#121212", "#121212", canvas.width- canvas.width/50+3, canvas.height - canvas.height/40
        , "center", "30pt Trebuchet MS", true, true, 0);
        score2.name = "scoreGameObject";
        let score3 =new ScoreGameObject("#121212", "#121212", canvas.width- canvas.width/50, canvas.height - canvas.height/40-3
        , "center", "30pt Trebuchet MS", true, true, 0);
        score3.name = "scoreGameObject";
        let score4 =new ScoreGameObject("#121212", "#121212", canvas.width- canvas.width/50, canvas.height - canvas.height/40+3
        , "center", "30pt Trebuchet MS", true, true, 0);
        score4.name = "scoreGameObject";
        let score5 =new ScoreGameObject("white", "yellow", canvas.width- canvas.width/50, canvas.height - canvas.height/40
        , "center", "30pt Trebuchet MS", true, true, 0);
        score5.name = "scoreGameObject";


        GameObject.instantiate(playerLifeGameObject);  
        let backGroundGameObject  = new GameObject().addComponent(new DrawBackground());
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
    }
}

window.MainScene=MainScene;