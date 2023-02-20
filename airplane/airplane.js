let targets = []; 
let projectiles = []; 
let planeX = window.innerWidth/2;
let planeY = window.innerHeight - window.innerHeight/6;
let size = 2;

class MainScene extends Scene {
    start() {
        this.propeller = false;
    }
    update() {
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


        removeObject(projectiles)
        removeObject(targets)
    }
    draw() {
        //draw ocean
        ctx.fillStyle = "steelblue";
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        drawtargets(size)
        drawprojectiles(size)
        drawPlane(planeX, planeY,size)

    }
}

document.addEventListener("keyup", shoot)
document.addEventListener("mousemove", mouseMove);
document.addEventListener("mouseup", shoot);

function shoot(e) {
    if (e.key == "x" || e.type == "mouseup" || e.code == "Space") {
        addProjectile(planeX,planeY)
        drawprojectiles()
    }

    if(e.key =="q") {
        addTarget()
    }
}

function addTarget() {
    let target = {itemX:Math.floor(Math.random() * (window.innerWidth*2/3)), itemY:0}
    targets[targets.length] = target; 
}


/*function mouseMove(e) {
    planeX = e.clientX; 
    planeY = e.clientY;
}*/

function addProjectile(planeX,planeY) {
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

function drawprojectiles(){
    let i = 0; 
    while (i < projectiles.length) {
        ctx.fillStyle = "white"
        ctx.beginPath()

        ctx.ellipse(projectiles[i].itemX, projectiles[i].itemY -131*size, 2*size, 10*size, 0, 0, Math.PI, true);
        ctx.ellipse(projectiles[i].itemX, projectiles[i].itemY -131*size, 2*size, 10*size, 0, 0, Math.PI, false);

       // ctx.arc(projectiles[i].itemX, projectiles[i].itemY -130*size, 5, 0, Math.PI * 2)
        ctx.fill()
        projectiles[i].itemY = projectiles[i].itemY - 30
        i++
    }
}

function drawtargets(){
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
    ctx.lineTo(x-1*size, y+85*size)
    ctx.lineTo(x, y+100*size)
    ctx.lineTo(x+1*size, y+85*size)
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
    ctx.lineTo(x-10*size, y-100*size)
    ctx.stroke();
    ctx.fill()

    if(this.propeller) {
        ctx.moveTo(x+9*size, y-105*size)
        ctx.lineTo(x+29*size, y-105*size)
        this.propeller = false;
    } else {
        ctx.moveTo(x-9*size, y-105*size)
        ctx.lineTo(x-29*size, y-105*size)
        this.propeller = true; 
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
    //Stripe
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
    ctx.moveTo(x-35*size, y+56*size)
    ctx.lineTo(x-35*size, y+78*size)
    ctx.lineTo(x-20*size, y+82*size)
    ctx.lineTo(x-20*size, y+53*size)
    ctx.lineTo(x-35*size, y+56*size)
    ctx.stroke();
    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(x+35*size, y+56*size)
    ctx.lineTo(x+35*size, y+78*size)
    ctx.lineTo(x+20*size, y+82*size)
    ctx.lineTo(x+20*size, y+53*size)
    ctx.lineTo(x+35*size, y+56*size)
    ctx.stroke();
    ctx.fillStyle="black"
    ctx.fill()

    //American Star Insignia
    ctx.beginPath()
    ctx.fillStyle="white"
    ctx.moveTo(x-115*size, y-48*size);
    ctx.lineTo(x-75*size, y-48*size)
    ctx.lineTo(x-75*size, y-40*size)
    ctx.lineTo(x-115*size, y-40*size)
    ctx.lineTo(x-115*size, y-48*size)
    ctx.fill()
    ctx.stroke()
    ctx.fillStyle="black"
    ctx.beginPath()
    ctx.arc(x-95*size, y-44*size, 10*size, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fill()
    ctx.fillStyle="white"
    drawStar(x-95*size, y-44*size, 9*size)  

    //Cockpit
    ctx.beginPath()
    ctx.fillStyle="black"
    ctx.ellipse(x, y-100*size, 9*size, 20*size, 0, 0, Math.PI, true);
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle="black"
    ctx.ellipse(x, y-50*size, 9*size, 60*size, 0, 0, Math.PI, true);
    ctx.ellipse(x, y-50*size, 9*size, 50*size, 0, 0, Math.PI, false);
    ctx.stroke()
    ctx.fill()
    
    ctx.beginPath()
    ctx.fillStyle="LightBlue"
    ctx.ellipse(x, y-42*size, 10*size, 12*size, 0, 0, Math.PI, true);
    ctx.ellipse(x, y-42*size, 10*size, 50*size, 0, 0, Math.PI, false);
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle="black"
    ctx.moveTo(x, y+8*size)
    ctx.lineTo(x, y+15*size)
    ctx.stroke()
    ctx.fill()

    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle="black"
    ctx.moveTo(x-1*size, y+85*size)
    ctx.lineTo(x, y+100*size)
    ctx.lineTo(x+1*size, y+85*size)
    ctx.lineTo(x-1*size, y+85*size)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle="slategrey"
    ctx.ellipse(x, y+65*size, 2*size, 25*size, 0, 0, Math.PI, true);
    ctx.ellipse(x, y+65*size, 2*size, 25*size, 0, 0, Math.PI, false);
    ctx.stroke()
    ctx.fill()
   


    
}

let mainScene = new MainScene()

SceneManager.addScene(mainScene)

