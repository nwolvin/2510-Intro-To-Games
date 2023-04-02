class MainScene extends Scene {
    start() {
        let plane = new PlaneGameObject();
        plane.name = "plane"; 
        plane.addComponent(new AddHitboxesController())

        let playerLifeGameObject = new GameObject(); 
        playerLifeGameObject.name = "playerLifeGameObject"
        let playerLifeController = new PlayerLifeController(5)
        playerLifeController.name = "playerLifeController"

        playerLifeGameObject.addComponent(playerLifeController)

        let score1 =new ScoreGameObject("#121212", "#121212", window.innerWidth - window.innerWidth/50 -3, window.innerHeight - window.innerHeight/40
        , "center", "30pt Trebuchet MS", true, true);
        score1.name = "scoreGameObject";
        let score2 =new ScoreGameObject("#121212", "#121212", window.innerWidth- window.innerWidth/50+3, window.innerHeight - window.innerHeight/40
        , "center", "30pt Trebuchet MS", true, true);
        score2.name = "scoreGameObject";
        let score3 =new ScoreGameObject("#121212", "#121212", window.innerWidth- window.innerWidth/50, window.innerHeight - window.innerHeight/40-3
        , "center", "30pt Trebuchet MS", true, true);
        score3.name = "scoreGameObject";
        let score4 =new ScoreGameObject("#121212", "#121212", window.innerWidth- window.innerWidth/50, window.innerHeight - window.innerHeight/40+3
        , "center", "30pt Trebuchet MS", true, true);
        score4.name = "scoreGameObject";
        let score5 =new ScoreGameObject("white", "yellow", window.innerWidth- window.innerWidth/50, window.innerHeight - window.innerHeight/40
        , "center", "30pt Trebuchet MS", true, true);
        score5.name = "scoreGameObject";


        GameObject.instantiate(playerLifeGameObject);  
        GameObject.instantiate(new GameObject().addComponent(new DrawBackground()))
        GameObject.instantiate(new GameObject().addComponent(new AddCloudController(2)))

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