import "./EngineClasses/SceneManager.js"
import "./EngineClasses/Component.js"
import "./EngineClasses/Scene.js"
import "./EngineClasses/GameObject.js"
import "./EngineClasses/Transform.js"
import "./EngineClasses/Input.js"
import "./EngineClasses/Time.js"
import "./EngineClasses/Cookie.js"
import "./EngineClasses/Star.js"

class EngineGlobals{
    static requestedAspectRatio = 16 / 9;
    static logicalWidth = 1440;
    static logicalHeight = EngineGlobals.logicalWidth/EngineGlobals.requestedAspectRatio;
}

window.EngineGlobals = EngineGlobals;


let canvas = document.querySelector("#canv")
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let keysUp = null

let nextGameObjectId = 0; 
let letterboxColor = "gray"

//0 is start scene, 1 main scene, 2 is dead scene
let scene = 0;

let pause = false

function getNextGameObjectId(){
    return nextGameObjectId; 
}

function addNextGameObjectId(){
    nextGameObjectId++;
}

function engineUpdate() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (pause) return

    Time.update();
    
    let scene = SceneManager.getActiveScene()
    if (SceneManager.changedSceneFlag && scene.start) {      
        let camera = scene.gameObjects[0]
        scene.gameObjects = []
        scene.gameObjects.push(camera)
        //Loop through the objects from the previous scene
        //so can preserve some
        let previousScene = SceneManager.getPreviousScene()
        if(previousScene){
            for(let gameObject of previousScene.gameObjects){
                if(gameObject.markedDoNotDestroyOnLoad){
                    scene.gameObjects.push(gameObject)
                }
            }
        }
    }
    
    //Handle Change Scene
    if (SceneManager.changedSceneFlag && scene.start) {
        scene.start()
        SceneManager.changedSceneFlag = false
    }
    
    for(let gameObject of scene.gameObjects){
        if(gameObject.start && !gameObject.started){
            gameObject.start()
            gameObject.started = true
        }
    }

    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.start && !component.started){
                component.start()
                component.started = true
            }
        }
    }
    //Handle destroy here
    let keptGameObjects = []
    for(let gameObject of scene.gameObjects){
        if(!gameObject.markedForDestroy){
            keptGameObjects.push(gameObject)
        }
    }
    scene.gameObjects = keptGameObjects;
    //Handle destroy here

    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.update){
                component.update()
            }
        }
    }
    Input.keysUp = null; 
}

function engineDraw() {

    ctx.fillStyle = Camera.main.fillStyle;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let browserAspectRatio = canvas.width / canvas.height;
    let offsetX = 0;
    let offsetY = 0;
    let browserWidth = canvas.width
    if (EngineGlobals.requestedAspectRatio > browserAspectRatio) {
        let desiredHeight = canvas.width / EngineGlobals.requestedAspectRatio;
        let amount = (canvas.height - desiredHeight) / 2;
        offsetY = amount;
    }
    else {
        let desiredWidth = canvas.height * EngineGlobals.requestedAspectRatio
        let amount = (canvas.width - desiredWidth) / 2;
        offsetX = amount
        browserWidth -= 2 * amount
    }
    
    let scene = SceneManager.getActiveScene()

    ctx.save();
    let logicalScaling = browserWidth / EngineGlobals.logicalWidth
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)
    ctx.scale(logicalScaling, logicalScaling)

    ctx.translate(-Camera.main.transform.x, -Camera.main.transform.y)

    //Draw each layer in order
    if(scene.gameObjects.length > 0){
        let min = scene.gameObjects
        .map(go => go.layer)
        .reduce((previous, current)=>Math.min(previous, current))
    
        let max = scene.gameObjects
        .map(go => go.layer).reduce((previous, current)=>Math.max(previous, current))
        
        for (let i = min; i <= max; i++) {
            let layerGameObjects = scene.gameObjects.filter(go=>go.layer==i)
            for(let gameObject of layerGameObjects){
                for(let component of gameObject.components){
                    if(component.draw){
                        component.draw(ctx)
                    }
                }
            }
        }
    }

    ctx.restore();

    let zeroX = 0;
    let zeroY = 0;
    if (EngineGlobals.requestedAspectRatio > browserAspectRatio) {
        let desiredHeight = canvas.width / EngineGlobals.requestedAspectRatio;
        let amount = (canvas.height - desiredHeight) / 2;
        zeroY = amount;
        ctx.fillStyle = letterboxColor
        ctx.fillRect(0, 0, canvas.width, amount);
        ctx.fillRect(0, canvas.height - amount, canvas.width, amount);
    }
    else {
        let desiredWidth = canvas.height * EngineGlobals.requestedAspectRatio
        let amount = (canvas.width - desiredWidth) / 2;
        zeroX = amount;
        ctx.fillStyle = letterboxColor
        ctx.fillRect(0, 0, amount, canvas.height);
        ctx.fillRect(canvas.width - amount, 0, amount, canvas.height);
    }

    if(scene.gameObjects.length > 0){
       let min = scene.gameObjects.filter(go=>go.components.some(c=>c.drawGUI))
        .map(go => go.layer)
        .reduce((previous, current)=>Math.min(previous, current),0)
    
        let max = scene.gameObjects.filter(go=>go.components.some(c=>c.drawGUI))
        .map(go => go.layer)
        .reduce((previous, current)=>Math.max(previous, current),0)
    
        //Loop through the components and draw them.
        ctx.save();
        ctx.translate(zeroX, zeroY)
        ctx.scale(logicalScaling, logicalScaling);
        for (let i = min; i <= max; i++) {
            let gameObjects = scene.gameObjects.filter(go=>go.layer==i)
    
            for (let gameObject of gameObjects) {
                for (let component of gameObject.components) {
                    if (component.drawGUI) {
                        component.drawGUI(ctx)
                    }
                }
            }
        }
    }

    ctx.restore();
}

function start(title, settings ={}){
    Input.start();
    
    document.title = title
    
    document.title = title
    if (settings) {
        EngineGlobals.requestedAspectRatio = settings.aspectRatio ? settings.aspectRatio : 16 / 9
        letterboxColor = settings.letterboxColor ? settings.letterboxColor : "black"
        EngineGlobals.logicalWidth = settings.logicalWidth ? settings.logicalWidth : 1440
    }

    function gameLoop() {
        engineUpdate()
        engineDraw()
        
    }

    setInterval(gameLoop, 1000 * Time.deltaTime)

}

/** Start the game in 'play mode1 */
window.start = start;

window.getNextGameObjectId = getNextGameObjectId;
window.addNextGameObjectId = addNextGameObjectId;
window.canvas = canvas; 