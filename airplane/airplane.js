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
import "./Components/PlaneHitbox/PlaneHitboxControllerComponent.js"
import "./Components/PlaneHitbox/PlaneHitboxDrawComponent.js"
import "./Components/PlaneHitbox/AddPlaneHitboxesController.js"
import "./Components/PlayerLife/PlayerLifeController.js"
import "./Components/PlayerLife/PlayerLifeIndicatorComponent.js"
import "./Components/PlayerLife/GUIPlaneDrawComponent.js"
import "./Components/PlaneFollowingCameraComponent.js"
import "./Components/CameraFollowingBackground.js"

import "../engine/Components/TextBox/TextBoxControllerComponent.js"
import "../engine/Components/TextBox/TextBoxTextComponent.js"
import "../engine/Components/TextBox/TextBoxCenteredTextComponent.js"
import "../engine/Components/TextBox/TextBoxRectangleComponent.js"
import "../engine/Components/Text/TextComponent.js"
import "../engine/Components/Text/TextControllerComponent.js"
import "../engine/Components/Score/ScoreDrawComponent.js"
import "../engine/Components/Score/HighScoreDrawComponent.js"
import "../engine/Components/Score/ScoreControllerComponent.js"
import "../engine/Components/MenuControllerComponent.js"
import "../engine/EngineClasses/Camera.js"

import "./GameObjects/CloudGameObject.js"
import "./GameObjects/PlaneGameObject.js"
import "./GameObjects/ProjectileGameObject.js"
import "./GameObjects/TargetGameObject.js"
import "./GameObjects/PlayerLifeGameObject.js"
import "../engine/GameObjects/RectangleGameObject.js"
import "../engine/GameObjects/TextBoxGameObject.js"
import "../engine/GameObjects/TextGameObject.js"
import "../engine/GameObjects/ScoreGameObject.js"
import "./Scenes/MainScene.js"
import "./Scenes/TitleScene.js"
import "./Scenes/EndGameScene.js"

//Handle favicon
const link = document.createElement("link");
link.href = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3E%3Ctext%20x='0'%20y='14'%3E🎖️%3C/text%3E%3C/svg%3E";
link.rel = "icon";
document.getElementsByTagName("head")[0].appendChild(link); // for IE6

let defScale = 7/20; 


let titleScene = new TitleScene("white")
let mainScene = new MainScene("white")
let endGameScene = new EndGameScene("white")

window.allAirplaneScenes = [titleScene, mainScene, endGameScene];

window.defScale = defScale


