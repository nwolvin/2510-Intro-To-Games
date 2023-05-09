
class EndGameScene extends Scene {
    start(){
        GameObject.instantiate(new GameObject().addComponent(new MenuControllerComponent()));


        let enterTextBox = new TextBoxGameObject("green", "white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2+canvas.height/16*2, "RETRY", false, true, false);
    
        let title =new TextGameObject("white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2 - canvas.height/16*2, "Aim Trainer", "center", "50pt Trebuchet MS");

        let score =new TextGameObject("white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2 + EngineGlobals.logicalHeight/16 - EngineGlobals.logicalHeight/24, "Average Reaction Time: "+Cookie.getCookie("avgReactionTime"), "center", "15pt Trebuchet MS");
        let time =new TextGameObject("white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2 - EngineGlobals.logicalHeight/24 , "Total Time: "+Cookie.getCookie("totalTime"), "center", "15pt Trebuchet MS");
        let home = new TextBoxGameObject("red", "white", EngineGlobals.logicalWidth - EngineGlobals.logicalWidth/32, 0+canvas.height/32, "x", false, true, false);
        home.name = "home";
        enterTextBox.name = "enterTextBox";
        GameObject.instantiate(enterTextBox);
        GameObject.instantiate(home)
        GameObject.instantiate(title);
        GameObject.instantiate(score);
        GameObject.instantiate(time);

    }
}

window.EndGameScene=EndGameScene;