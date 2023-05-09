class ShootController extends Component {
    start(){
      this.shootIntervalTime = 0;
      this.flagReset = Math.ceil(Time.fpsTarget/6);
    }
    update(){
      if(this.shootIntervalTime == this.flagReset){
        if(Input.mouseDown || Input.keysDown[" "]){
          shoot();
        }
        this.shootIntervalTime = 0;
      }
      this.shootIntervalTime++;
    }
  }

  function shoot(){
     
    //Shoot Left Projectile
    
     let leftProjectile = new ProjectileGameObject();
     leftProjectile.x = GameObject.getObjectByName("plane").getComponent("planeComponent").transform.x -70*GameObject.getObjectByName("plane").planeScale;
     leftProjectile.y = GameObject.getObjectByName("plane").getComponent("planeComponent").transform.y -50*GameObject.getObjectByName("plane").planeScale;
     leftProjectile.rotate = 1;
     leftProjectile.name="playerProjectile"
     GameObject.instantiate(leftProjectile);

     //Shoot Right Projectile
     let rightProjectile = new ProjectileGameObject();
     rightProjectile.x = GameObject.getObjectByName("plane").getComponent("planeComponent").transform.x +70*GameObject.getObjectByName("plane").planeScale;
     rightProjectile.y = GameObject.getObjectByName("plane").getComponent("planeComponent").transform.y -50*GameObject.getObjectByName("plane").planeScale;
     rightProjectile.rotate = 1;
     rightProjectile.name="playerProjectile"
     GameObject.instantiate(rightProjectile);
  }


  window.ShootController = ShootController;