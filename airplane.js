let time = 0
let up = true

let planeX = window.innerWidth/2;
let planeY = window.innerWidth/2;//window.innerHeight - window.innerHeight/6;
let size = 5/2
let projectiles = []; 
let targets = []; 
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
    }
    removeObject(projectiles)
    removeObject(targets)
    
}

function shoot(e) {
    if (e.key == "x" || e.type == "mouseup" || e.code == "Space") {
        addProjectile()
        drawProjectiles()
    }

    if(e.key =="q") {
        addTarget()
    }
}

function addTarget() {
    let target = {itemX:Math.floor(Math.random() * window.innerWidth) + window.innerWidth/2, itemY:0}
    targets[targets.length] = target; 
}


function mouseMove(e) {
   /* planeX = e.clientX; 
    planeY = e.clientY;*/
}

function addProjectile() {
    let projectile = {itemX:planeX, itemY:planeY}; 
    projectiles[projectiles.length] = projectile; 
    
}

function removeObject(arr) {
    let i = 0
    while (i < arr.length) {
        if(arr[i].itemY < 0 ) {
            arr.splice(i, 1);
        }
        i++
    }
}

function drawProjectiles(){
    let i = 0; 
    while (i < projectiles.length) {
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(projectiles[i].itemX, projectiles[i].itemY -130*size, 5, 0, Math.PI * 2)
        ctx.fill()
        projectiles[i].itemY = projectiles[i].itemY - 30
        i++
    }
}

function drawTargets(){
    let i = 0; 
    while (i < targets.length) {
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.arc(targets[i].itemX*size, targets[i].itemY*size, 20, 0, Math.PI * 2)
        ctx.fill()
        targets[i].itemY = targets[i].itemY + 10
        i++
    }
}

function drawPlane(x,y) {
    ctx.beginPath();
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
    ctx.stroke();
    ctx.fill()

    if(propeller) {
        ctx.moveTo(x+10*size, y-105*size)
        ctx.lineTo(x+30*size, y-105*size)
        propeller = false;
    } else {
        ctx.moveTo(x-10*size, y-105*size)
        ctx.lineTo(x-30*size, y-105*size)
        propeller = true; 
    }
    ctx.stroke();
    ctx.fill()
    
    

    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.moveTo(x-35*size, y-60*size)
    ctx.lineTo(x-35*size, y-13*size)
    ctx.lineTo(x-20*size, y-11*size)
    ctx.lineTo(x-20*size, y-66*size)
    ctx.lineTo(x-35*size, y-60*size)
    ctx.stroke();
    ctx.fill()

    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.moveTo(x+35*size, y-60*size)
    ctx.lineTo(x+35*size, y-13*size)
    ctx.lineTo(x+20*size, y-11*size)
    ctx.lineTo(x+20*size, y-66*size)
    ctx.lineTo(x+35*size, y-60*size)
    ctx.stroke();
    ctx.fill()

    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.moveTo(x-35*size, y+56*size)
    ctx.lineTo(x-35*size, y+78*size)
    
    ctx.lineTo(x-20*size, y+82*size)
    ctx.lineTo(x-20*size, y+53*size)
    ctx.lineTo(x-35*size, y+56*size)
    ctx.stroke();
    ctx.fill()

    ctx.beginPath();
    ctx.fillStyle = "black"
    ctx.moveTo(x+35*size, y+56*size)
    ctx.lineTo(x+35*size, y+78*size)
    
    ctx.lineTo(x+20*size, y+82*size)
    ctx.lineTo(x+20*size, y+53*size)
    ctx.lineTo(x+35*size, y+56*size)
    ctx.stroke();
    ctx.fill()

    
    ctx.fillStyle="white"
    ctx.moveTo(x-120*size, y-46*size);
    ctx.lineTo(x-80*size, y-46*size)
    ctx.lineTo(x-80*size, y-38*size)
    ctx.lineTo(x-120*size, y-38*size)
    ctx.stroke()

    ctx.fillStyle="black"
    ctx.beginPath()
    ctx.arc(x-100*size, y-42*size, 10*size, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()
    
    



    
    
    //ctx.lineTo(x, y-100*size)
    
   
    

}

function draw() {
    //draw ocean
    ctx.fillStyle = "steelblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    drawPlane(planeX, planeY)
    drawTargets()
    drawProjectiles()
}