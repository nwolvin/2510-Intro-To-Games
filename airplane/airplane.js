import "/engine/engine.js"
import "./Components/Cloud/AddCloudController.js"
import "./Components/Enemy/AddTargetController.js"
import "./Components/Cloud/CloudComponent.js"
import "./Components/Cloud/CloudDrawComponent.js"
import "../engine/Components/DrawBackground.js"
import "./Components/Plane/PlaneComponent.js"
import "./Components/Plane/PlaneDrawComponent.js"
import "./Components/Enemy/EnemyPlaneDrawComponent.js"
import "./Components/Plane/PlanePropellerController.js"
import "./Components/Plane/ShootController.js"
import "./Components/Enemy/EnemyShootController.js"
import "./Components/Enemy/TargetComponent.js"
import "./Components/Projectile/ProjectileComponent.js"
import "./Components/Projectile/ProjectileDrawComponent.js"
import "./Components/Hitbox/HitboxControllerComponent.js"
import "./Components/Hitbox/HitboxDrawComponent.js"
import "./Components/Hitbox/AddHitboxesController.js"
import "./Components/PlayerLife/PlayerLifeController.js"
import "./Components/PlayerLife/PlayerLifeIndicatorComponent.js"
import "./Components/Title/TitleSceneControllerComponent.js"
import "../engine/Components/TextBoxTextComponent.js"
import "../engine/Components/TextBoxRectangleComponent.js"
import "../engine/EngineClasses/Camera.js"

import "./GameObjects/CloudGameObject.js"
import "./GameObjects/PlaneGameObject.js"
import "./GameObjects/ProjectileGameObject.js"
import "./GameObjects/TargetGameObject.js"
import "./GameObjects/PlayerLifeGameObject.js"
import "../engine/GameObjects/RectangleGameObject.js"
import "../engine/GameObjects/TextBoxGameObject.js"

import "./Scenes/MainScene.js"
import "./Scenes/TitleScene.js"


let titleScene = new TitleScene()
let mainScene = new MainScene()

window.allScenes = [titleScene, mainScene];





