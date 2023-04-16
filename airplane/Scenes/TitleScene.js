
class TitleScene extends Scene {
    start(){
        GameObject.instantiate(new GameObject().addComponent(new MenuControllerComponent()));
        
        let backGroundGameObject  = new GameObject().addComponent(new DrawBackground());
        backGroundGameObject.layer = -1;
        GameObject.instantiate(backGroundGameObject);
       
        GameObject.instantiate(new GameObject().addComponent(new AddCloudController()));
       
        let plane = new PlaneGameObject();
        plane.name = "plane"; 

        let playerLifeGameObject = new GameObject(); 
        playerLifeGameObject.name = "playerLifeGameObject"
        let playerLifeController = new PlayerLifeController(0)
        playerLifeController.name = "playerLifeController"

        playerLifeGameObject.addComponent(playerLifeController)

        GameObject.instantiate(playerLifeGameObject);
        GameObject.instantiate(plane);

        let score1 =new ScoreGameObject("#121212", "#121212", 0-3, 0 + - EngineGlobals.logicalHeight/2 + canvas.height/8
        , "center", "30pt Trebuchet MS", false, true, 0);
        score1.name = "scoreGameObject";
        let score2 =new ScoreGameObject("#121212", "#121212", 0+3, 0 + - EngineGlobals.logicalHeight/2 + canvas.height/8
        , "center", "30pt Trebuchet MS", false, true, 0);
        score2.name = "scoreGameObject";
        let score3 =new ScoreGameObject("#121212", "#121212", 0, 0 + - EngineGlobals.logicalHeight/2 + canvas.height/8-3
        , "center", "30pt Trebuchet MS", false, true, 0);
        score3.name = "scoreGameObject";
        let score4 =new ScoreGameObject("#121212", "#121212", 0, 0 + - EngineGlobals.logicalHeight/2 + canvas.height/8+3
        , "center", "30pt Trebuchet MS", false, true, 0);
        score4.name = "scoreGameObject";
        let score5 =new ScoreGameObject("white", "yellow",0, 0 + - EngineGlobals.logicalHeight/2 + canvas.height/8
        , "center", "30pt Trebuchet MS", false, true, 0);
        score5.name = "scoreGameObject";

        // let score =new ScoreGameObject("white", 0, 0 - - EngineGlobals.logicalHeight/2 + canvas.height/8, "center", "40pt Trebuchet MS");
        // score.name = "scoreGameObject";
        let enterTextBox = new TextBoxGameObject("green", "white", 0, 0+canvas.height/16, 70, "ENTER", true, 0);
        let title1 =new TextGameObject("#121212", 0, 0 - canvas.height/16 -3, "Airplane Shooter", "center", "40pt Trebuchet MS");
        let title2 =new TextGameObject("#121212", 0, 0 - canvas.height/16 + 3, "Airplane Shooter", "center", "40pt Trebuchet MS");
        let title3 =new TextGameObject("#121212", 0 - 3, 0 - canvas.height/16, "Airplane Shooter", "center", "40pt Trebuchet MS");
        let title4 =new TextGameObject("#121212", 0 + 3, 0 - canvas.height/16, "Airplane Shooter", "center", "40pt Trebuchet MS");
        let title5 =new TextGameObject("white", 0, 0 - canvas.height/16, "Airplane Shooter", "center", "40pt Trebuchet MS");
        enterTextBox.name = "enterTextBox";
        title1.name = "title";
        //GameObject.instantiate(score)
        GameObject.instantiate(enterTextBox);
        GameObject.instantiate(title1);
        GameObject.instantiate(title2);
        GameObject.instantiate(title3);
        GameObject.instantiate(title4);
        GameObject.instantiate(title5);
        GameObject.instantiate(score1)
        GameObject.instantiate(score2)
        GameObject.instantiate(score3)
        GameObject.instantiate(score4)
        GameObject.instantiate(score5)

        Camera.main.parent.addComponent(new CenteredCameraComponent());
    }
}

window.TitleScene=TitleScene;