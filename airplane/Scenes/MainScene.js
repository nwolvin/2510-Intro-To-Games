class MainScene extends Scene {
    start() {
        let plane = new PlaneGameObject();
        plane.name = "plane"; 

        let playerLifeGameObject = new GameObject(); 
        playerLifeGameObject.name = "playerLifeGameObject"
        let playerLifeController = new PlayerLifeController()
        playerLifeController.name = "playerLifeController"

        playerLifeGameObject.addComponent(playerLifeController)

        this.addGameObject(new GameObject().addComponent(new DrawBackground()))
        this.addGameObject(new GameObject().addComponent(new AddCloudController()))

        this.addGameObject(plane)  
        this.addGameObject(new GameObject().addComponent(new ShootController()))
        this.addGameObject(new GameObject().addComponent(new AddTargetController()))
        this.addGameObject(playerLifeGameObject);  
        console.log(this.gameObjects); 
    }
}

window.MainScene=MainScene;