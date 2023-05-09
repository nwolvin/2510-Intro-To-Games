
class TitleScene extends Scene {
    start(){
        GameObject.instantiate(new GameObject().addComponent(new MenuControllerComponent()));
        let enterTextBox = new TextBoxGameObject("green", "white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2+canvas.height/16*3, "START", false, true, false);
        let ten = new TextBoxGameObject("red", "white", EngineGlobals.logicalWidth/2 - EngineGlobals.logicalWidth/12, EngineGlobals.logicalHeight/2+canvas.height/16, "10", false, true, false);
        let twentyfive = new TextBoxGameObject("red", "white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2+canvas.height/16, "25", false, true, false);
        let fifty = new TextBoxGameObject("red", "white", EngineGlobals.logicalWidth/2 + EngineGlobals.logicalWidth/12, EngineGlobals.logicalHeight/2+canvas.height/16, "50", false, true, false);

        let title =new TextGameObject("white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2 - canvas.height/16*2, "Aim Trainer", "center", "50pt Trebuchet MS");
        let targetsText =new TextGameObject("white", EngineGlobals.logicalWidth/2, EngineGlobals.logicalHeight/2, "Please select the number of targets you would like.", "center", "12pt Trebuchet MS");


        enterTextBox.name = "enterTextBox";

        ten.name = "ten";
        twentyfive.name = "twentyfive";
        fifty.name = "fifty";
        
        
        
        GameObject.instantiate(enterTextBox);
        GameObject.instantiate(ten); 
        GameObject.instantiate(twentyfive); 
        GameObject.instantiate(fifty); 


        GameObject.instantiate(title);
        GameObject.instantiate(targetsText)


        ten.selected = true;



    }
}

window.TitleScene=TitleScene;