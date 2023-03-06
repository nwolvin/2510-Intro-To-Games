class DrawBackground extends Component {
    draw() {
        //draw ocean
        ctx.fillStyle = "steelblue";
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}

class PlaneGameObject extends GameObject {
    start(){
        //Plane Component        
        let planeComponent = new PlaneComponent(); 
        planeComponent.name ="planeComponent"; 
        this.addComponent(planeComponent);

        //Plane Propeller Component
        let planePropeller = new PlanePropellerController()
        planePropeller.name = "propeller"
        this.addComponent(planePropeller)

        //Plane Draw Component
        let planeDrawComponent = new PlaneDrawComponent(); 
        planeDrawComponent.name ="planeDrawComponent"; 
        planeDrawComponent.rotate = 1
        planeDrawComponent.propeller = this.getComponent("planeComponent").propeller;
        this.addComponent(planeDrawComponent);
    }  
}

class PlaneComponent extends Component {
    start() {
        document.addEventListener("mousemove", mouseMove);
        this.transform.x = window.innerWidth/2;
        this.transform.y = window.innerHeight - window.innerHeight/6;
        this.transform.sx = 1/2
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
    }
}

class PlanePropellerController extends Component {
    start(){
        this.propeller = true; 
    }
    update(){
        if(this.propeller) {
            this.propeller = false; 
        } else {
            this.propeller = true; 
        }
    }
}

class PlaneDrawComponent extends Component {
    draw(ctx) {
        let ellipseCounterClockwise = false; 
        if(this.rotate == 1) {
            ellipseCounterClockwise = true;
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
}

class ProjectileDrawComponent extends Component {
    draw(ctx){
        this.transform.x = this.parent.getComponent("projectile").transform.x
        this.transform.y = this.parent.getComponent("projectile").transform.y
        this.transform.sx = this.parent.getComponent("projectile").transform.sx

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
        projectileComponent.name = "projectile"
        this.addComponent(projectileComponent);
        this.addComponent(new ProjectileDrawComponent())

    }
}

class TargetComponent extends Component {
    start() {
        this.transform.sx = GameObject.getObjectByName("plane").getComponent("planeDrawComponent").transform.sx;
        this.transform.x = window.innerWidth*1/6+(Math.floor(Math.random() * (window.innerWidth*2/3))); 
        this.transform.y = -150
    }
    update() {
        if(this.transform.y > canvas.height) {
            SceneManager.getActiveScene().removeGameObject(SceneManager.getActiveScene().getObjectIndexById(this.parent.id))
        } else {
            this.transform.y +=5;
        }
    }
}


class TargetGameObject extends GameObject {
    start(){
        let targetComponent = new TargetComponent(); 
        targetComponent.type = "target";
        this.addComponent(targetComponent);

        let enemyPlanePropeller = new PlanePropellerController()
        enemyPlanePropeller.name = "propeller"
        this.addComponent(enemyPlanePropeller)

        let enemyPlaneDraw = new PlaneDrawComponent()
        enemyPlaneDraw.rotate = -1
        enemyPlaneDraw.propeller = this.getComponent("propeller").propeller

        this.addComponent(enemyPlaneDraw)
    }
}


class CloudComponent extends Component {
    start() {
        this.transform.sx = GameObject.getObjectByName("plane").getComponent("planeDrawComponent").transform.sx;
        this.transform.x = (Math.floor(Math.random() * (window.innerWidth*2/3))); 
        this.transform.y = -60
        this.circleNum = 8
        this.circles = []

        let i = 0
        for (let i = 0; i < this.circleNum; i++){
            this.circles[i] = {rx: this.transform.x+Math.floor(Math.random() * 150), ry: this.transform.y+Math.floor(Math.random() * 50)};
        }
    }
    update() {
        if(this.transform.y > canvas.height +200) {
            SceneManager.getActiveScene().removeGameObject(SceneManager.getActiveScene().getObjectIndexById(this.parent.id))
        } else {
            this.transform.y +=2;
        }
    }
}

class CloudDrawComponent extends Component {
    draw(ctx){  
        this.transform.x = this.parent.getComponent("cloud").transform.x
        this.transform.y = this.parent.getComponent("cloud").transform.y
        this.transform.sx = this.parent.getComponent("cloud").transform.sx
        this.circles = this.parent.getComponent("cloud").circles
        this.circleNum = this.parent.getComponent("cloud").circleNum

        ctx.fillStyle = "white";
        for(let i = 0; i < this.circleNum; i++){
            ctx.beginPath();
            ctx.arc(this.transform.x+this.circles[i].rx, this.transform.y+this.circles[i].ry, 50, 0, Math.PI * 2)
            ctx.fill()
        }
    }
}


class CloudGameObject extends GameObject {
    start(){
        let cloudComponent = new CloudComponent();
        cloudComponent.name = "cloud"; 
        this.addComponent(cloudComponent);
        this.addComponent(new CloudDrawComponent());
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

