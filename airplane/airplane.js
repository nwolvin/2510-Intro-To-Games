class DrawBackground extends Component {
    draw() {
        //draw ocean
        ctx.fillStyle = "steelblue";
        ctx.fillRect(0, 0, canvas.width, canvas.height)
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
        this.planeX = window.innerWidth/2;
        this.planeY = window.innerHeight - window.innerHeight/6;
        this.propeller = true; 
    }
    update() {
        //Pull the keyboard state and move paddle
        if(keysDown["ArrowRight"] || keysDown["d"]){
            this.planeX +=12
        }
        if(keysDown["ArrowLeft"] || keysDown["a"]){
            this.planeX -=12
        }
        if(keysDown["ArrowUp"] || keysDown["w"]){
            this.planeY -=12
        }
        if(keysDown["ArrowDown"] || keysDown["s"]){
            this.planeY +=12
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
        this.size =2/3; 
        this.planeX = SceneManager.getActiveScene().getObjectByName("plane").getComponent("planeComponent").planeX;
        this.planeY = SceneManager.getActiveScene().getObjectByName("plane").getComponent("planeComponent").planeY;
        this.propeller = SceneManager.getActiveScene().getObjectByName("plane").getComponent("planeComponent").propeller;
        ctx.beginPath();
        ctx.fillStyle = "slategrey"
        ctx.moveTo(this.planeX-10*this.size, this.planeY-100*this.size);
        ctx.lineTo(this.planeX-10*this.size, this.planeY-70*this.size)
        ctx.lineTo(this.planeX-35*this.size, this.planeY-60*this.size)
        ctx.lineTo(this.planeX-120*this.size, this.planeY-55*this.size)
        ctx.lineTo(this.planeX-120*this.size, this.planeY-25*this.size)
    
        ctx.lineTo(this.planeX-10*this.size, this.planeY-10*this.size)
        ctx.lineTo(this.planeX-8*this.size, this.planeY+50*this.size)

        ctx.lineTo(this.planeX-50*this.size, this.planeY+60*this.size)
        ctx.lineTo(this.planeX-48*this.size, this.planeY+75*this.size)
        ctx.lineTo(this.planeX-8*this.size, this.planeY+85*this.size)
        ctx.lineTo(this.planeX-1*this.size, this.planeY+85*this.size)
        ctx.lineTo(this.planeX, this.planeY+100*this.size)
        ctx.lineTo(this.planeX+1*this.size, this.planeY+85*this.size)
        ctx.lineTo(this.planeX+8*this.size, this.planeY+85*this.size)
        ctx.lineTo(this.planeX+48*this.size, this.planeY+75*this.size)
        ctx.lineTo(this.planeX+50*this.size, this.planeY+60*this.size)
        ctx.lineTo(this.planeX+8*this.size, this.planeY+50*this.size)
        ctx.lineTo(this.planeX+10*this.size, this.planeY-10*this.size)
        ctx.lineTo(this.planeX+120*this.size, this.planeY-25*this.size)
        ctx.lineTo(this.planeX+120*this.size, this.planeY-55*this.size)
        ctx.lineTo(this.planeX+35*this.size, this.planeY-60*this.size)
        ctx.lineTo(this.planeX+10*this.size, this.planeY-70*this.size)
        ctx.lineTo(this.planeX+10*this.size, this.planeY-100*this.size)
        ctx.lineTo(this.planeX-10*this.size, this.planeY-100*this.size)
        ctx.stroke();
        ctx.fill()

        if(this.propeller) {
            ctx.moveTo(this.planeX+9*this.size, this.planeY-105*this.size)
            ctx.lineTo(this.planeX+29*this.size, this.planeY-105*this.size)
            this.propeller = false;
        } else {
            ctx.moveTo(this.planeX-9*this.size, this.planeY-105*this.size)
            ctx.lineTo(this.planeX-29*this.size, this.planeY-105*this.size)
            this.propeller = true; 
        }
        ctx.stroke();
        ctx.fill()
        
        

        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.moveTo(this.planeX-35*this.size, this.planeY-60*this.size)
        ctx.lineTo(this.planeX-35*this.size, this.planeY-13*this.size)
        ctx.lineTo(this.planeX-20*this.size, this.planeY-11*this.size)
        ctx.lineTo(this.planeX-20*this.size, this.planeY-66*this.size)
        ctx.lineTo(this.planeX-35*this.size, this.planeY-60*this.size)
        ctx.stroke();
        ctx.fill()
        //Stripe
        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.moveTo(this.planeX+35*this.size, this.planeY-60*this.size)
        ctx.lineTo(this.planeX+35*this.size, this.planeY-13*this.size)
        ctx.lineTo(this.planeX+20*this.size, this.planeY-11*this.size)
        ctx.lineTo(this.planeX+20*this.size, this.planeY-66*this.size)
        ctx.lineTo(this.planeX+35*this.size, this.planeY-60*this.size)
        ctx.stroke();
        ctx.fill()
        ctx.beginPath();
        ctx.moveTo(this.planeX-35*this.size, this.planeY+56*this.size)
        ctx.lineTo(this.planeX-35*this.size, this.planeY+78*this.size)
        ctx.lineTo(this.planeX-20*this.size, this.planeY+82*this.size)
        ctx.lineTo(this.planeX-20*this.size, this.planeY+53*this.size)
        ctx.lineTo(this.planeX-35*this.size, this.planeY+56*this.size)
        ctx.stroke();
        ctx.fill()
        ctx.beginPath();
        ctx.moveTo(this.planeX+35*this.size, this.planeY+56*this.size)
        ctx.lineTo(this.planeX+35*this.size, this.planeY+78*this.size)
        ctx.lineTo(this.planeX+20*this.size, this.planeY+82*this.size)
        ctx.lineTo(this.planeX+20*this.size, this.planeY+53*this.size)
        ctx.lineTo(this.planeX+35*this.size, this.planeY+56*this.size)
        ctx.stroke();
        ctx.fillStyle="black"
        ctx.fill()

        //American Star Insignia
        ctx.beginPath()
        ctx.fillStyle="white"
        ctx.moveTo(this.planeX-115*this.size, this.planeY-48*this.size);
        ctx.lineTo(this.planeX-75*this.size, this.planeY-48*this.size)
        ctx.lineTo(this.planeX-75*this.size, this.planeY-40*this.size)
        ctx.lineTo(this.planeX-115*this.size, this.planeY-40*this.size)
        ctx.lineTo(this.planeX-115*this.size, this.planeY-48*this.size)
        ctx.fill()
        ctx.stroke()
        ctx.fillStyle="black"
        ctx.beginPath()
        ctx.arc(this.planeX-95*this.size, this.planeY-44*this.size, 10*this.size, 0, Math.PI * 2)
        ctx.stroke()
        ctx.fill()
        ctx.fillStyle="white"
        drawStar(this.planeX-95*this.size, this.planeY-44*this.size, 9*this.size)  

        //Cockpit
        ctx.beginPath()
        ctx.fillStyle="black"
        ctx.ellipse(this.planeX, this.planeY-100*this.size, 9*this.size, 20*this.size, 0, 0, Math.PI, true);
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        ctx.fillStyle="black"
        ctx.ellipse(this.planeX, this.planeY-50*this.size, 9*this.size, 60*this.size, 0, 0, Math.PI, true);
        ctx.ellipse(this.planeX, this.planeY-50*this.size, 9*this.size, 50*this.size, 0, 0, Math.PI, false);
        ctx.stroke()
        ctx.fill()
        
        ctx.beginPath()
        ctx.fillStyle="LightBlue"
        ctx.ellipse(this.planeX, this.planeY-42*this.size, 10*this.size, 12*this.size, 0, 0, Math.PI, true);
        ctx.ellipse(this.planeX, this.planeY-42*this.size, 10*this.size, 50*this.size, 0, 0, Math.PI, false);
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        ctx.fillStyle="black"
        ctx.moveTo(this.planeX, this.planeY+8*this.size)
        ctx.lineTo(this.planeX, this.planeY+15*this.size)
        ctx.stroke()
        ctx.fill()

        ctx.closePath()
        ctx.beginPath()
        ctx.fillStyle="black"
        ctx.moveTo(this.planeX-1*this.size, this.planeY+85*this.size)
        ctx.lineTo(this.planeX, this.planeY+100*this.size)
        ctx.lineTo(this.planeX+1*this.size, this.planeY+85*this.size)
        ctx.lineTo(this.planeX-1*this.size, this.planeY+85*this.size)
        ctx.stroke()
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle="slategrey"
        ctx.ellipse(this.planeX, this.planeY+65*this.size, 2*this.size, 25*this.size, 0, 0, Math.PI, true);
        ctx.ellipse(this.planeX, this.planeY+65*this.size, 2*this.size, 25*this.size, 0, 0, Math.PI, false);
        ctx.stroke()
        ctx.fill()
        ctx.closePath()
    }
        
}


class ProjectileComponent extends Component {
    start() {
        this.itemX = SceneManager.getActiveScene().getObjectByName("plane").getComponent("planeComponent").planeX;
        this.itemY = SceneManager.getActiveScene().getObjectByName("plane").getComponent("planeComponent").planeY;
        this.size = SceneManager.getActiveScene().getObjectByName("plane").getComponent("planeDrawComponent").size;
    }
    update() {
        this.itemY -= 30;
    }
    draw(ctx){
        
        ctx.beginPath()
        ctx.fillStyle="white"
        ctx.ellipse(this.itemX, this.itemY -(100*this.size)*this.size, 2*this.size, 10*this.size, 0, 0, Math.PI, true);
        ctx.ellipse(this.itemX, this.itemY -(100*this.size)*this.size, 2*this.size, 10*this.size, 0, 0, Math.PI, false);
        ctx.fill()
        
    }

}

class ProjectileGameObject extends GameObject {
    start(){
        let projectileComponent = new ProjectileComponent(); 
        projectileComponent.name = "p1";
        this.addComponent(projectileComponent);

    }
}




class TargetComponent extends Component {
    start() {
        this.size = SceneManager.getActiveScene().getObjectByName("plane").getComponent("planeDrawComponent").size;
        this.itemX = Math.floor(Math.random() * (window.innerWidth*2/3)); 
        this.itemY = 0; 
    }
    update() {
        this.itemY +=5;
    }
    draw(ctx){
        
        ctx.fillStyle = "red";
        ctx.fillRect(this.itemX, this.itemY, 25, 25)
        
        
       
        
    }

}

class TargetGameObject extends GameObject {
    start(){
        let targetComponent = new TargetComponent(); 
        targetComponent.name = "t1";
        this.addComponent(targetComponent);

    }
}

class ShootController extends Component {
  start(){

  }
  update(){
    if(mouseUpFlag == true){
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


class MainScene extends Scene {
    start() {
        let plane = new PlaneGameObject();
        plane.name = "plane"; 
        this.addGameObject(new GameObject().addComponent(new DrawBackground()))
        this.addGameObject(plane)  
        this.addGameObject(new GameObject().addComponent(new ShootController()))
        this.addGameObject(new GameObject().addComponent(new AddTargetController()))
    }
}
let mainScene = new MainScene()

SceneManager.addScene(mainScene)

