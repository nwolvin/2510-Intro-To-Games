
class TitleScene extends Scene {
    start(){
        GameObject.instantiate(new GameObject().addComponent(new MenuControllerComponent()));

        // let score =new ScoreGameObject("white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2 - - EngineGlobals.logicalHeight/2 + canvas.height/8, "center", "40pt Trebuchet MS");
        // score.name = "scoreGameObject";
        let enterTextBox = new TextBoxGameObject("green", "white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2+canvas.height/16, 70, "START", false, true);
        let title1 =new TextGameObject("#121212", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2 - canvas.height/16 -3, "Aim Trainer", "center", "40pt Trebuchet MS");
        let title2 =new TextGameObject("#121212", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2 - canvas.height/16 + 3, "Aim Trainer", "center", "40pt Trebuchet MS");
        let title3 =new TextGameObject("#121212", EngineGlobals.logicalWidth/2 - 3, EngineGlobals.logicalHeight/2 - canvas.height/16, "Aim Trainer", "center", "40pt Trebuchet MS");
        let title4 =new TextGameObject("#121212", EngineGlobals.logicalWidth/2 + 3, EngineGlobals.logicalHeight/2 - canvas.height/16, "Aim Trainer", "center", "40pt Trebuchet MS");
        let title5 =new TextGameObject("white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2 - canvas.height/16, "Aim Trainer", "center", "40pt Trebuchet MS");
        enterTextBox.name = "enterTextBox";
        title1.name = "title";
        //GameObject.instantiate(score)
        GameObject.instantiate(enterTextBox);
        GameObject.instantiate(title1);
        GameObject.instantiate(title2);
        GameObject.instantiate(title3);
        GameObject.instantiate(title4);
        GameObject.instantiate(title5);

        // Camera.main.parent.addComponent(new PlaneFollowingCameraComponent());
    }
}

window.TitleScene=TitleScene;