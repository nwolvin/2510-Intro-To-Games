class DrawBackground extends Component {
    draw() {
        //draw ocean
        ctx.fillStyle = "steelblue";
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        //ctx.beginPath()
        ctx.fillStyle = "white";
        let x = 500
        let y = 500

       
        

    }
}

class PlaneGameObject extends GameObject {
    start(){
        let planeComponent = new PlaneComponent(); 
        planeComponent.name ="planeComponent"; 
        this.addComponent(planeComponent);
        let planeDrawComponent = new PlaneDrawComponent(); 
        planeDrawComponent.name ="planeDrawComponent"; 
        this.addComponent(planeDrawComponent);
    }  
}

class PlaneComponent extends Component {
    start() {
        document.addEventListener("mousemove", mouseMove);
        this.transform.x = window.innerWidth/2;
        this.transform.y = window.innerHeight - window.innerHeight/6;
        this.transform.sx = 2/3
        this.propeller = true; 
        this.rotate = 1
    }
    update() {
        //Pull the keyboard state and move paddle
        if(keysDown["ArrowRight"] || keysDown["d"]){
            this.transform.x +=12
        }
        if(keysDown["ArrowLeft"] || keysDown["a"]){
            this.transform.x -=12
        }
        if(keysDown["ArrowUp"] || keysDown["w"]){
            this.transform.y -=12
        }
        if(keysDown["ArrowDown"] || keysDown["s"]){
            this.transform.y +=12
        }
        if(this.propeller) {
            this.propeller = false; 
        } else {
            this.propeller = true; 
        }
       
    }
}

class PlaneDrawComponent extends Component {
    draw(ctx) {
        this.propeller = GameObject.getObjectByName("plane").getComponent("planeComponent").propeller;
        this.rotate = GameObject.getObjectByName("plane").getComponent("planeComponent").rotate;

        let ellipseCounterClockwise; 
        if(this.rotate == 1) {
            ellipseCounterClockwise = true;
        } else {
            ellipseCounterClockwise = false;  
        }
        ctx.beginPath();
        ctx.fillStyle = "slategrey"
        ctx.moveTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-100*this.transform.sx*this.rotate);
        ctx.lineTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-70*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-120*this.transform.sx*this.rotate, this.transform.y-55*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-120*this.transform.sx*this.rotate, this.transform.y-25*this.transform.sx*this.rotate)
    
        ctx.lineTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-10*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-8*this.transform.sx*this.rotate, this.transform.y+50*this.transform.sx*this.rotate)

        ctx.lineTo(this.transform.x-50*this.transform.sx*this.rotate, this.transform.y+60*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-48*this.transform.sx*this.rotate, this.transform.y+75*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-8*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x, this.transform.y+100*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+8*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+48*this.transform.sx*this.rotate, this.transform.y+75*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+50*this.transform.sx*this.rotate, this.transform.y+60*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+8*this.transform.sx*this.rotate, this.transform.y+50*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+10*this.transform.sx*this.rotate, this.transform.y-10*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+120*this.transform.sx*this.rotate, this.transform.y-25*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+120*this.transform.sx*this.rotate, this.transform.y-55*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+10*this.transform.sx*this.rotate, this.transform.y-70*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+10*this.transform.sx*this.rotate, this.transform.y-100*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-100*this.transform.sx*this.rotate)
        ctx.stroke();
        ctx.fill()

        if(this.propeller) {
            ctx.moveTo(this.transform.x+9*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+29*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
            this.propeller = false;
        } else {
            ctx.moveTo(this.transform.x-9*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-29*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
            this.propeller = true; 
        }
        ctx.stroke();
        ctx.fill()
        
        

        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.moveTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-13*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y-11*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y-66*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
        ctx.stroke();
        ctx.fill()
        //Stripe
        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.moveTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-13*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y-11*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y-66*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
        ctx.stroke();
        ctx.fill()
        ctx.beginPath();
        ctx.moveTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y+78*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y+82*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y+53*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
        ctx.stroke();
        ctx.fill()
        ctx.beginPath();
        ctx.moveTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y+78*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y+82*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y+53*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
        ctx.stroke();
        ctx.fillStyle="black"
        ctx.fill()

        //American Star Insignia
        ctx.beginPath()
        ctx.fillStyle="white"
        ctx.moveTo(this.transform.x-115*this.transform.sx*this.rotate, this.transform.y-48*this.transform.sx*this.rotate);
        ctx.lineTo(this.transform.x-75*this.transform.sx*this.rotate, this.transform.y-48*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-75*this.transform.sx*this.rotate, this.transform.y-40*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-115*this.transform.sx*this.rotate, this.transform.y-40*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-115*this.transform.sx*this.rotate, this.transform.y-48*this.transform.sx*this.rotate)
        ctx.fill()
        ctx.stroke()
        ctx.fillStyle="black"
        ctx.beginPath()
        ctx.arc(this.transform.x-95*this.transform.sx*this.rotate, this.transform.y-44*this.transform.sx*this.rotate, 10*this.transform.sx, 0, Math.PI * 2)
        ctx.stroke()
        ctx.fill()
        ctx.fillStyle="white"
        drawStar(this.transform.x-95*this.transform.sx*this.rotate, this.transform.y-44*this.transform.sx*this.rotate, 9*this.transform.sx*this.rotate)  

        //Cockpit
        ctx.beginPath()
        ctx.fillStyle="black"
        ctx.ellipse(this.transform.x, this.transform.y-100*this.transform.sx*this.rotate, 9*this.transform.sx, 20*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        ctx.fillStyle="black"
        ctx.ellipse(this.transform.x, this.transform.y-50*this.transform.sx*this.rotate, 9*this.transform.sx, 60*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
        ctx.ellipse(this.transform.x, this.transform.y-50*this.transform.sx*this.rotate, 9*this.transform.sx, 50*this.transform.sx, 0, 0, Math.PI, !ellipseCounterClockwise);
        ctx.stroke()
        ctx.fill()
        
        ctx.beginPath()
        ctx.fillStyle="LightBlue"
        ctx.ellipse(this.transform.x, this.transform.y-42*this.transform.sx*this.rotate, 10*this.transform.sx, 12*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
        ctx.ellipse(this.transform.x, this.transform.y-42*this.transform.sx*this.rotate, 10*this.transform.sx, 50*this.transform.sx, 0, 0, Math.PI, !ellipseCounterClockwise);
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        ctx.fillStyle="black"
        ctx.moveTo(this.transform.x, this.transform.y+8*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x, this.transform.y+15*this.transform.sx*this.rotate)
        ctx.stroke()
        ctx.fill()

        ctx.closePath()
        ctx.beginPath()
        ctx.fillStyle="black"
        ctx.moveTo(this.transform.x-1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x, this.transform.y+100*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x+1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
        ctx.lineTo(this.transform.x-1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
        ctx.stroke()
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle="slategrey"
        ctx.ellipse(this.transform.x, this.transform.y+65*this.transform.sx*this.rotate, 2*this.transform.sx, 25*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
        ctx.ellipse(this.transform.x, this.transform.y+65*this.transform.sx*this.rotate, 2*this.transform.sx, 25*this.transform.sx, 0, 0, Math.PI, !ellipseCounterClockwise);
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
    }
        
}


class ProjectileComponent extends Component {
    start() {
        this.transform.x = GameObject.getObjectByName("plane").getComponent("planeComponent").transform.x;
        this.transform.y = GameObject.getObjectByName("plane").getComponent("planeComponent").transform.y;
        this.transform.sx = GameObject.getObjectByName("plane").getComponent("planeDrawComponent").transform.sx;
    }
    update() {
        if(this.transform.y > canvas.height || this.transform.y < 0) {
            SceneManager.getActiveScene().removeGameObject(SceneManager.getActiveScene().getObjectIndexById(this.parent.id))
        } else {
            this.transform.y -= 30;
        }
        
    }
    draw(ctx){
        
        ctx.beginPath()
        ctx.fillStyle="white"
        ctx.ellipse(this.transform.x, this.transform.y -(100*this.transform.sx)*this.transform.sx, 2*this.transform.sx, 10*this.transform.sx, 0, 0, Math.PI, true);
        ctx.ellipse(this.transform.x, this.transform.y -(100*this.transform.sx)*this.transform.sx, 2*this.transform.sx, 10*this.transform.sx, 0, 0, Math.PI, false);
        ctx.fill()
        
    }

}

class ProjectileGameObject extends GameObject {
    start(){
        this.hasCollision = true; 
        this.collidableWith = ["target"]; 
        let projectileComponent = new ProjectileComponent(); 
        projectileComponent.type = "projectile";
        this.addComponent(projectileComponent);

    }
}

class TargetComponent extends Component {
    start() {
        this.transform.sx = GameObject.getObjectByName("plane").getComponent("planeDrawComponent").transform.sx;
        this.transform.x = window.innerWidth*1/6+(Math.floor(Math.random() * (window.innerWidth*2/3))); 
        this.transform.y = -20
    }
    update() {
        if(this.transform.y > canvas.height) {
            SceneManager.getActiveScene().removeGameObject(SceneManager.getActiveScene().getObjectIndexById(this.parent.id))
        } else {
            console.log(SceneManager.getActiveScene())
            this.transform.y +=5;
        }
    }
    draw(ctx){
        
            this.propeller = GameObject.getObjectByName("plane").getComponent("planeComponent").propeller;
            this.rotate = -1;
    
            let ellipseCounterClockwise; 
            if(this.rotate == 1) {
                ellipseCounterClockwise = true;
            } else {
                ellipseCounterClockwise = false;  
            }
            ctx.beginPath();
            ctx.fillStyle = "slategrey"
            ctx.moveTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-100*this.transform.sx*this.rotate);
            ctx.lineTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-70*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-120*this.transform.sx*this.rotate, this.transform.y-55*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-120*this.transform.sx*this.rotate, this.transform.y-25*this.transform.sx*this.rotate)
        
            ctx.lineTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-10*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-8*this.transform.sx*this.rotate, this.transform.y+50*this.transform.sx*this.rotate)
    
            ctx.lineTo(this.transform.x-50*this.transform.sx*this.rotate, this.transform.y+60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-48*this.transform.sx*this.rotate, this.transform.y+75*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-8*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x, this.transform.y+100*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+8*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+48*this.transform.sx*this.rotate, this.transform.y+75*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+50*this.transform.sx*this.rotate, this.transform.y+60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+8*this.transform.sx*this.rotate, this.transform.y+50*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+10*this.transform.sx*this.rotate, this.transform.y-10*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+120*this.transform.sx*this.rotate, this.transform.y-25*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+120*this.transform.sx*this.rotate, this.transform.y-55*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+10*this.transform.sx*this.rotate, this.transform.y-70*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+10*this.transform.sx*this.rotate, this.transform.y-100*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-100*this.transform.sx*this.rotate)
            ctx.stroke();
            ctx.fill()
    
            if(this.propeller) {
                ctx.moveTo(this.transform.x+9*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
                ctx.lineTo(this.transform.x+29*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
                this.propeller = false;
            } else {
                ctx.moveTo(this.transform.x-9*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
                ctx.lineTo(this.transform.x-29*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
                this.propeller = true; 
            }
            ctx.stroke();
            ctx.fill()
            
            
    
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.moveTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-13*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y-11*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y-66*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.stroke();
            ctx.fill()
            //Stripe
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.moveTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-13*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y-11*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y-66*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.stroke();
            ctx.fill()
            ctx.beginPath();
            ctx.moveTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y+78*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y+82*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y+53*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
            ctx.stroke();
            ctx.fill()
            ctx.beginPath();
            ctx.moveTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y+78*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y+82*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y+53*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
            ctx.stroke();
            ctx.fillStyle="black"
            ctx.fill()
    
            //American Star Insignia
            ctx.beginPath()
            ctx.fillStyle="white"
            ctx.moveTo(this.transform.x-115*this.transform.sx*this.rotate, this.transform.y-48*this.transform.sx*this.rotate);
            ctx.lineTo(this.transform.x-75*this.transform.sx*this.rotate, this.transform.y-48*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-75*this.transform.sx*this.rotate, this.transform.y-40*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-115*this.transform.sx*this.rotate, this.transform.y-40*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-115*this.transform.sx*this.rotate, this.transform.y-48*this.transform.sx*this.rotate)
            ctx.fill()
            ctx.stroke()
            ctx.fillStyle="black"
            ctx.beginPath()
            ctx.arc(this.transform.x-95*this.transform.sx*this.rotate, this.transform.y-44*this.transform.sx*this.rotate, 10*this.transform.sx, 0, Math.PI * 2)
            ctx.stroke()
            ctx.fill()
            ctx.fillStyle="white"
            drawStar(this.transform.x-95*this.transform.sx*this.rotate, this.transform.y-44*this.transform.sx*this.rotate, 9*this.transform.sx*this.rotate)  
    
            //Cockpit
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.ellipse(this.transform.x, this.transform.y-100*this.transform.sx*this.rotate, 9*this.transform.sx, 20*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.ellipse(this.transform.x, this.transform.y-50*this.transform.sx*this.rotate, 9*this.transform.sx, 60*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.ellipse(this.transform.x, this.transform.y-50*this.transform.sx*this.rotate, 9*this.transform.sx, 50*this.transform.sx, 0, 0, Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            
            ctx.beginPath()
            ctx.fillStyle="LightBlue"
            ctx.ellipse(this.transform.x, this.transform.y-42*this.transform.sx*this.rotate, 10*this.transform.sx, 12*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.ellipse(this.transform.x, this.transform.y-42*this.transform.sx*this.rotate, 10*this.transform.sx, 50*this.transform.sx, 0, 0, Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x, this.transform.y+8*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x, this.transform.y+15*this.transform.sx*this.rotate)
            ctx.stroke()
            ctx.fill()
    
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x-1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x, this.transform.y+100*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.stroke()
            ctx.fill()
    
            ctx.beginPath()
            ctx.fillStyle="slategrey"
            ctx.ellipse(this.transform.x, this.transform.y+65*this.transform.sx*this.rotate, 2*this.transform.sx, 25*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.ellipse(this.transform.x, this.transform.y+65*this.transform.sx*this.rotate, 2*this.transform.sx, 25*this.transform.sx, 0, 0, Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
        }   
    }




class TargetGameObject extends GameObject {
    start(){
        let targetComponent = new TargetComponent(); 
        targetComponent.type = "target";
        this.addComponent(targetComponent);

    }
}



class CloudComponent extends Component {
    start() {
        this.transform.sx = GameObject.getObjectByName("plane").getComponent("planeDrawComponent").transform.sx;
        this.transform.x = (Math.floor(Math.random() * (window.innerWidth*2/3))); 
        this.transform.y = -60

        this.rx1 = this.transform.x+Math.floor(Math.random() * 150);
        this.rx2 = this.transform.x+Math.floor(Math.random() * 150);
        this.rx3 = this.transform.x+Math.floor(Math.random() * 150);
        this.rx4 = this.transform.x+Math.floor(Math.random() * 150);
        this.rx5 = this.transform.x+Math.floor(Math.random() * 150);
       
        this.ry1 = this.transform.y+Math.floor(Math.random() * 50);
        this.ry2 = this.transform.y+Math.floor(Math.random() * 50);
        this.ry3 = this.transform.y+Math.floor(Math.random() * 50);
        this.ry4 = this.transform.y+Math.floor(Math.random() * 50);
        this.ry5 = this.transform.y+Math.floor(Math.random() * 50);
    }
    update() {
        if(this.transform.y > canvas.height +60) {
            SceneManager.getActiveScene().removeGameObject(SceneManager.getActiveScene().getObjectIndexById(this.parent.id))
        } else {
            console.log(SceneManager.getActiveScene())
            this.transform.y +=2;
        }
    }
    draw(ctx){  
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.transform.x+this.rx1, this.transform.y+this.ry1, 50, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.transform.x+this.rx2, this.transform.y+this.ry2, 50, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.transform.x+this.rx3, this.transform.y+this.ry3, 50, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.transform.x+this.rx4, this.transform.y+this.ry4, 50, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.transform.x+this.rx5, this.transform.y+this.ry5, 50, 0, Math.PI * 2)
        ctx.fill()
       
    }

}

class CloudGameObject extends GameObject {
    start(){
        let cloudComponent = new CloudComponent(); 
        this.addComponent(cloudComponent);

    }
}

class ShootController extends Component {
  start(){

  }
  update(){
    if(mouseUpFlag == true || keysUp == ' '){
        SceneManager.getActiveScene().addGameObject(new ProjectileGameObject());
    }
  }
}

class AddTargetController extends Component {
    start(){
  
    }
    update(){
      if(keysUp == 'x'){
          SceneManager.getActiveScene().addGameObject(new TargetGameObject());
      }

    }
  }

  
class AddCloudController extends Component {
    start(){
        this.i = 0;
    }
    update(){  
        if( this.i == 90){
            SceneManager.getActiveScene().addGameObject(new CloudGameObject)
            this.i = 0
        } else {
            this.i++;
        }
    }
  }


class MainScene extends Scene {
    start() {
        let plane = new PlaneGameObject();
        plane.name = "plane"; 
        let i = 0

        this.addGameObject(new GameObject().addComponent(new DrawBackground()))
        this.addGameObject(new GameObject().addComponent(new AddCloudController()))

        this.addGameObject(plane)  
        this.addGameObject(new GameObject().addComponent(new ShootController()))
        this.addGameObject(new GameObject().addComponent(new AddTargetController()))
        
    }
}
let mainScene = new MainScene()

SceneManager.addScene(mainScene)

