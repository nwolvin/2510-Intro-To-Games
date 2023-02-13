let time = 0
let up = true

let planeX = canvas.width; 
let planeY = canvas.height; 

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
}


function drawPlane(x,y, size) {

    
    ctx.fillStyle = "black";
    ctx.beginPath();
    //ctx.arc(x, y, 100*size, 0, Math.PI * 2)
    ctx.stroke();
    ctx.fillStyle = "slategrey"
    ctx.moveTo(x, y);
    ctx.moveTo(x, y-100*size);
    ctx.moveTo(x-10*size, y-100*size);
   // ctx.lineTo(x-10*size, y-100*size)
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
    ctx.moveTo(x+10*size, y-100*size)
    ctx.lineTo(x+30*size, y-100*size)
    ctx.moveTo(x-10*size, y-100*size)
    ctx.lineTo(x-30*size, y-100*size)
    //ctx.lineTo(x, y-100*size)
    ctx.stroke();
    //ctx.fill()
    
    ctx.stroke()
}

function draw() {
    //draw ocean
    ctx.fillStyle = "lightsteelblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    drawPlane(planeX, planeY, 2/3)
}