class ShootController extends Component {
    start(){
      this.shootIntervalTime = 0;
    }
    update(){
     /* if(getMouseUpFlag() == true || getKeysUp() == ' '){
        shoot();
      } */

      if(this.shootIntervalTime == 5){
        if(getMouseDownFlag() || keysDown[" "]){
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
     leftProjectile.x = GameObject.getObjectByName("plane").getComponent("planeComponent").transform.x -70*GameObject.getObjectByName("plane").getComponent("planeComponent").transform.sx;
     leftProjectile.y = GameObject.getObjectByName("plane").getComponent("planeComponent").transform.y -50*GameObject.getObjectByName("plane").getComponent("planeComponent").transform.sx;
     leftProjectile.rotate = 1;
     leftProjectile.name="playerProjectile"
     GameObject.instantiate(leftProjectile);

     //Shoot Right Projectile
     let rightProjectile = new ProjectileGameObject();
     rightProjectile.x = GameObject.getObjectByName("plane").getComponent("planeComponent").transform.x +70*GameObject.getObjectByName("plane").getComponent("planeComponent").transform.sx;
     rightProjectile.y = GameObject.getObjectByName("plane").getComponent("planeComponent").transform.y -50*GameObject.getObjectByName("plane").getComponent("planeComponent").transform.sx;
     rightProjectile.rotate = 1;
     rightProjectile.name="playerProjectile"
     GameObject.instantiate(rightProjectile);
  }


  window.ShootController = ShootController;