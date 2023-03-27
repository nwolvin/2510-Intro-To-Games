class MainScene extends Scene {
    start() {
        let plane = new PlaneGameObject();
        plane.name = "plane"; 

        let playerLifeGameObject = new GameObject(); 
        playerLifeGameObject.name = "playerLifeGameObject"
        let playerLifeController = new PlayerLifeController(5)
        playerLifeController.name = "playerLifeController"

        playerLifeGameObject.addComponent(playerLifeController)

        GameObject.instantiate(new GameObject().addComponent(new DrawBackground()))
        GameObject.instantiate(new GameObject().addComponent(new AddCloudController()))

        GameObject.instantiate(plane)  
        GameObject.instantiate(new GameObject().addComponent(new ShootController()))
        GameObject.instantiate(new GameObject().addComponent(new AddTargetController()))
        GameObject.instantiate(playerLifeGameObject);  
    }
}

window.MainScene=MainScene;