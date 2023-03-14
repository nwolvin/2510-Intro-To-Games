import "/engine/engine.js"
import "./Components/AddCloudController.js"
import "./Components/AddTargetController.js"
import "./Components/CloudComponent.js"
import "./Components/CloudDrawComponent.js"
import "./Components/DrawBackground.js"
import "./Components/PlaneComponent.js"
import "./Components/PlaneDrawComponent.js"
import "./Components/EnemyPlaneDrawComponent.js"
import "./Components/PlanePropellerController.js"
import "./Components/ShootController.js"
import "./Components/EnemyShootController.js"
import "./Components/TargetComponent.js"
import "./Components/ProjectileComponent.js"
import "./Components/ProjectileDrawComponent.js"
import "./Components/HitboxControllerComponent.js"
import "./Components/HitboxDrawComponent.js"
import "./Components/AddHitboxesController.js"
import "./Components/PlayerLifeController.js"
import "./Components/PlayerLifeIndicatorComponent.js"


import "./GameObjects/CloudGameObject.js"
import "./GameObjects/PlaneGameObject.js"
import "./GameObjects/ProjectileGameObject.js"
import "./GameObjects/TargetGameObject.js"
import "./GameObjects/PlayerLifeGameObject.js"




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
        
    }
}
let mainScene = new MainScene()

export default mainScene;

