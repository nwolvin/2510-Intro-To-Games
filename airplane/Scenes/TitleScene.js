
class TitleScene extends Scene {
    start(){
        GameObject.instantiate(new GameObject().addComponent(new TitleSceneControllerComponent()));
        GameObject.instantiate(new GameObject().addComponent(new DrawBackground()));
        //GameObject.instantiate(new GameObject().addComponent(new AddCloudController()))
       
        let plane = new PlaneGameObject();
        plane.name = "plane"; 

        let playerLifeGameObject = new GameObject(); 
        playerLifeGameObject.name = "playerLifeGameObject"
        let playerLifeController = new PlayerLifeController(0)
        playerLifeController.name = "playerLifeController"

        playerLifeGameObject.addComponent(playerLifeController)
        GameObject.instantiate(plane);
        GameObject.instantiate(playerLifeGameObject);
       
        GameObject.instantiate(new TextBoxGameObject("green", "white", window.innerWidth/2, window.innerWidth/2+window.innerWidth/16, 70, "ENTER", true))
        GameObject.instantiate(new TextGameObject("white", window.innerWidth/2, window.innerWidth/2 - window.innerWidth/16, "Airplane Shooter", "center", "40pt Trebuchet MS"));
        
    }
}

window.TitleScene=TitleScene;