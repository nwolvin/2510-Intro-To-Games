import "/engine/engine.js"
import "../engine/Components/DrawBackground.js"

import "../engine/Components/TextBox/TextBoxTextComponent.js"
import "../engine/Components/TextBox/TextBoxCenteredTextComponent.js"
import "../engine/Components/TextBox/TextBoxControllerComponent.js"
import "../engine/Components/TextBox/TextBoxRectangleComponent.js"
import "../engine/Components/Text/TextComponent.js"
import "../engine/Components/Text/TextControllerComponent.js"
import "../engine/Components/Score/ScoreDrawComponent.js"
import "../engine/Components/Score/HighScoreDrawComponent.js"
import "../engine/Components/Score/ScoreControllerComponent.js"
import "../engine/Components/MenuControllerComponent.js"
import "../engine/Components/Rectangle/RectangleComponent.js"
import "../engine/Components/Rectangle/RectangleDrawComponent.js"

import "../engine/Components/Timer/TimerDrawComponent.js"

import "../engine/EngineClasses/Camera.js"

import "../engine/GameObjects/RectangleGameObject.js"
import "../engine/GameObjects/TextBoxGameObject.js"
import "../engine/GameObjects/TextGameObject.js"
import "../engine/GameObjects/ScoreGameObject.js"
import "../engine/GameObjects/RectangleGameObject.js"
import "./Scenes/MainScene.js"
import "./Scenes/TitleScene.js"
import "./Scenes/EndGameScene.js"

import "./GameObjects/TargetGameObject.js"
import "./Components/TargetComponent.js"
import "./Components/AddTargetComponent.js"
import "./Components/AimScoreComponent.js"
import "./Components/ScoreTextControllerComponent.js"
//Handle favicon
const link = document.createElement("link");
link.href = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3E%3Ctext%20x='0'%20y='14'%3E🎯%3C/text%3E%3C/svg%3E";
link.rel = "icon";
document.getElementsByTagName("head")[0].appendChild(link); // for IE6

let defScale = 7/20; 
let titleScene = new TitleScene("black")
let mainScene = new MainScene("black")
let endGameScene = new EndGameScene("black")


window.allAimScenes = [titleScene, mainScene, endGameScene];

window.defScale = defScale


