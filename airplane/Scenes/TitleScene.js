
class TitleScene extends Scene {
    start(){
        GameObject.instantiate(new GameObject().addComponent(new TitleSceneControllerComponent()));
        GameObject.instantiate(new GameObject().addComponent(new DrawBackground()));
       
        GameObject.instantiate(new GameObject().addComponent(new AddCloudController(3)));
       
        let plane = new PlaneGameObject();
        plane.name = "plane"; 

        let playerLifeGameObject = new GameObject(); 
        playerLifeGameObject.name = "playerLifeGameObject"
        let playerLifeController = new PlayerLifeController(0)
        playerLifeController.name = "playerLifeController"

        playerLifeGameObject.addComponent(playerLifeController)

        GameObject.instantiate(playerLifeGameObject);
        GameObject.instantiate(plane);

        let enterTextBox = new TextBoxGameObject("green", "white", window.innerWidth/2, window.innerWidth/2+window.innerWidth/16, 70, "ENTER", true);
        let title =new TextGameObject("white", window.innerWidth/2, window.innerWidth/2 - window.innerWidth/16, "Airplane Shooter", "center", "40pt Trebuchet MS");
        enterTextBox.name = "enterTextBox";
        title.name = "title";
        GameObject.instantiate(enterTextBox);
        GameObject.instantiate(title);
    }
}

window.TitleScene=TitleScene;