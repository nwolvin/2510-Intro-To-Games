let time = 0
let up = true

let planeX = window.innerWidth/2;
let planeY = window.innerHeight - window.innerHeight/6;
let size = 1
let projectiles = []; 
let propeller = false;


document.addEventListener("keyup", shoot)
document.addEventListener("mousemove", mouseMove);
document.addEventListener("mouseup", shoot);

function update() {
    //Pull the keyboard state and move paddle
    if(keysDown["ArrowRight"] || keysDown["d"]){
        planeX +=12
    }
    if(keysDown["ArrowLeft"] || keysDown["a"]){
        planeX -=12
    }
    if(keysDown["ArrowUp"] || keysDown["w"]){
        planeY -=12
    }
    if(keysDown["ArrowDown"] || keysDown["s"]){
        planeY +=12
    }
    if(keyUp["x"]) {
        console.log("shoot");
    }
    removeProjectiles()
    
}

function shoot(e) {
    if (e.key == "x" || e.type == "mouseup" || e.code == "Space") {
        addProjectile()
        drawProjectiles()
    }
}


function mouseMove(e) {
   /* planeX = e.clientX; 
    planeY = e.clientY;*/
}

function addProjectile() {
    let projectile = {projX:planeX, projY:planeY}; 
    projectiles[projectiles.length] = projectile; 
    
}
function removeProjectiles() {
    let i = 0
    while (i < projectiles.length) {
        if(projectiles[i].projY < 0 ) {
            projectiles.splice(i, 1);
        }
        i++
    }
}

function drawProjectiles(){
    let i = 0; 
    while (i < projectiles.length) {
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(projectiles[i].projX, projectiles[i].projY -130*size, 5, 0, Math.PI * 2)
        ctx.fill()
        projectiles[i].projY = projectiles[i].projY - 30
        i++
    }

}

function drawPlane(x,y) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillStyle = "LightSkyBlue"
    //ctx.arc(x, y-20, 100*size, 0, Math.PI * 2)
    ctx.stroke();
    ctx.fillStyle = "slategrey"
    ctx.moveTo(x, y);
    ctx.moveTo(x, y-100*size);
    ctx.moveTo(x-10*size, y-100*size);
    ctx.lineTo(x-10*size, y-70*size)
    ctx.lineTo(x-35*size, y-60*size)
    ctx.lineTo(x-120*size, y-55*size)
    ctx.lineTo(x-120*size, y-25*size)
   
    ctx.lineTo(x-10*size, y-10*size)
    ctx.lineTo(x-8*size, y+50*size)

    ctx.lineTo(x-50*size, y+60*size)
    ctx.lineTo(x-48*size, y+75*size)
    ctx.lineTo(x-8*size, y+85*size)
    ctx.lineTo(x-2*size, y+85*size)
    ctx.lineTo(x, y+100*size)
    ctx.lineTo(x+2*size, y+85*size)
    ctx.lineTo(x+8*size, y+85*size)
    ctx.lineTo(x+48*size, y+75*size)
    ctx.lineTo(x+50*size, y+60*size)
    ctx.lineTo(x+8*size, y+50*size)
    ctx.lineTo(x+10*size, y-10*size)
    ctx.lineTo(x+120*size, y-25*size)
    ctx.lineTo(x+120*size, y-55*size)
    ctx.lineTo(x+35*size, y-60*size)
    ctx.lineTo(x+10*size, y-70*size)
    ctx.lineTo(x+10*size, y-100*size)
    ctx.ellipse(x, y-100*size, 10*size, 20*size, 0, 0, Math.PI, true);
    ctx.fill()
    if(propeller) {
        ctx.moveTo(x+10*size, y-100*size)
        ctx.lineTo(x+30*size, y-100*size)
        propeller = false;
    } else {
        ctx.moveTo(x-10*size, y-100*size)
        ctx.lineTo(x-30*size, y-100*size)
        propeller = true; 
    }
    
    
    //ctx.lineTo(x, y-100*size)
    ctx.stroke();
    ctx.fill()
    
    ctx.stroke()
}

function draw() {
    //draw ocean
    ctx.fillStyle = "LightSkyBlue";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    drawPlane(planeX, planeY)
    drawProjectiles()
}