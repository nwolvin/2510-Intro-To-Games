import "./EngineClasses/SceneManager.js"
import "./EngineClasses/Component.js"
import "./EngineClasses/Scene.js"
import "./EngineClasses/GameObject.js"
import "./EngineClasses/Transform.js"


//Handle favicon
const link = document.createElement("link");
link.href = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3E%3Ctext%20x='0'%20y='14'%3E🎖️%3C/text%3E%3C/svg%3E";
link.rel = "icon";
document.getElementsByTagName("head")[0].appendChild(link); // for IE6



let canvas = document.querySelector("#canv")
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let keysDown = []
let keysUp = null
let mouseX;
let mouseY
let mouseDownFlag = false;
let mouseUpFlag = false; 
let nextGameObjectId = 0; 
let mouseLocation = {mouseX, mouseY}

//Not the strings has to be all lowercase, e.g. keydown not keyDown or KeyDown
document.addEventListener("keydown", keyDown)
document.addEventListener("keyup", keyUp)

document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
document.addEventListener("mousemove", mouseMove);

//0 is start scene, 1 main scene, 2 is dead scene
let scene = 0;

let pause = false

function getNextGameObjectId(){
    return nextGameObjectId; 
}

function addNextGameObjectId(){
    nextGameObjectId++;
}

function mouseDown(e) {
    mouseDownFlag = true;
}
function mouseUp(e) {
    mouseDownFlag = false; 
    mouseUpFlag = true; 
}
function mouseMove(e) {
    mouseLocation.mouseX = e.clientX;
    mouseLocation.mouseY = e.clientY;
}

function getMouseUpFlag(){
    return mouseUpFlag;
}
function getMouseDownFlag(){
    return mouseDownFlag;
}

function keyUp(e) {
    keysDown[e.key] = false
    keysUp = e.key;
    if (e.key == "p") {
        pause = !pause
    }
}

function keyDown(e) {
    keysDown[e.key] = true
    //To prevent scrolling (if needed)
    //This has to be in keyDown, not keyup
    if (e.key == " ") {
        e.preventDefault()
    }
}

function engineUpdate() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (pause) return
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
    mouseUpFlag = false; 
    keysUp = null; 
}

let requestedAspectRatio = 16/9 ; 
let logicalWidth = 1440; 
let letterboxColor = "gray"


function engineDraw() {

    ctx.fillStyle = Camera.main.fillStyle;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let browserAspectRatio = canvas.width / canvas.height;
    let offsetX = 0;
    let offsetY = 0;
    let browserWidth = canvas.width
    if (requestedAspectRatio > browserAspectRatio) {
        let desiredHeight = canvas.width / requestedAspectRatio;
        let amount = (canvas.height - desiredHeight) / 2;
        offsetY = amount;
    }
    else {
        let desiredWidth = canvas.height * requestedAspectRatio
        let amount = (canvas.width - desiredWidth) / 2;
        offsetX = amount
        browserWidth -= 2 * amount
    }
    
    
    
    let scene = SceneManager.getActiveScene()

    ctx.save();
    let logicalScaling = browserWidth / logicalWidth
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

    if (requestedAspectRatio > browserAspectRatio) {
        let desiredHeight = canvas.width / requestedAspectRatio;
        let amount = (canvas.height - desiredHeight) / 2;
        ctx.fillStyle = letterboxColor
        ctx.fillRect(0, 0, canvas.width, amount);
        ctx.fillRect(0, canvas.height - amount, canvas.width, amount);
    }
    else {
        let desiredWidth = canvas.height * requestedAspectRatio
        let amount = (canvas.width - desiredWidth) / 2;
        ctx.fillStyle = letterboxColor
        ctx.fillRect(0, 0, amount, canvas.height);
        ctx.fillRect(canvas.width - amount, 0, amount, canvas.height);
    }



}

function getKeysUp(){
    return keysUp;
}

function drawStar(starX, starY, radius) {
    ctx.beginPath();
    for(var i = 11; i != 0; i--)
    {
        var alpha = (2 * Math.PI) / 10; 
        
        var r = radius*(i % 2 + 1)/2;
        var omega = alpha * i;
        ctx.lineTo((r * Math.sin(omega)) + starX, (r * Math.cos(omega)) + starY);
    }
    ctx.closePath();
    ctx.stroke()
    ctx.fill();
}

function start(title, settings ={}){
    document.title = title
    
    document.title = title
    if (settings) {
        requestedAspectRatio = settings.aspectRatio ? settings.aspectRatio : 16 / 9
        letterboxColor = settings.letterboxColor ? settings.letterboxColor : "black"
        logicalWidth = settings.logicalWidth ? settings.logicalWidth : 1440
    }

    function gameLoop() {
        engineUpdate()
        engineDraw()
        
    }

    setInterval(gameLoop, 1000 / 30)

}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieSplits = decodedCookie.split(';');
    for(const element of cookieSplits) {
        let c = element;
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";" + "path=/";
}


/** Start the game in 'play mode1 */
window.start = start;

window.getNextGameObjectId = getNextGameObjectId;
window.addNextGameObjectId = addNextGameObjectId;
window.mouseMove = mouseMove;
window.mouseDownFlag = mouseDownFlag;
window.keysDown = keysDown;
window.getKeysUp = getKeysUp;
window.getMouseUpFlag = getMouseUpFlag;
window.getMouseDownFlag = getMouseDownFlag;
window.drawStar = drawStar;
window.mouseLocation = mouseLocation;
window.getCookie = getCookie; 
window.setCookie = setCookie;
window.canvas = canvas; 
window.logicalWidth = logicalWidth; 
window.logicalHeight = logicalWidth * 9 / 16