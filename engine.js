let canvas = document.querySelector("#canv")
let ctx = canvas.getContext("2d");

let keysDown = []
let mouseX;
let mouseY

//Not the strings has to be all lowercase, e.g. keydown not keyDown or KeyDown
document.addEventListener("keydown", keyDown)
document.addEventListener("keyup", keyUp)

document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
document.addEventListener("mousemove", mouseMove);

//0 is start scene, 1 main scene, 2 is dead scene
let scene = 0;

let pause = false

function mouseDown(e) {
    //console.log("mouseDown: " + e.clientX + " " + e.clientY)
}
function mouseUp(e) {
    //console.log("mouseUp: " + e.clientX + " " + e.clientY)
}
function mouseMove(e) {
    //console.log("mouseMove: " + e.clientX + " " + e.clientY)
}

function keyUp(e) {
    keysDown[e.key] = false
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
    if (pause) return
    update()
}

function engineDraw() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    draw()
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


function start(title){
    document.title = title
    function gameLoop() {
        engineUpdate()
        
        engineDraw()
        
    }

    setInterval(gameLoop, 1000 / 30)

}
