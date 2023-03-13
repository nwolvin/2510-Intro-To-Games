class EnemyShootController extends Component {
    start(){
      this.shootIntervalTime = 0;
      this.transform.x = this.parent.getComponent("target").transform.x
      this.transform.y = this.parent.getComponent("target").transform.y
      this.transform.sx = this.parent.getComponent("target").transform.sx
    }
    update(){
      if( this.shootIntervalTime == 8){
        let leftProjectile = new ProjectileGameObject();
        leftProjectile.name = "enemyProjectile";
        leftProjectile.x = this.parent.getComponent("target").transform.x
        leftProjectile.y = this.parent.getComponent("target").transform.y
        leftProjectile.rotate = -1
        SceneManager.getActiveScene().addGameObject(leftProjectile);
        this.shootIntervalTime = 0;
      } else {
        this.shootIntervalTime++;
      }
    }
}

  window.EnemyShootController = EnemyShootController;