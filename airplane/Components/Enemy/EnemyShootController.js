class EnemyShootController extends Component {
    start(){
      this.shootIntervalTime = 0;
      this.transform.x = this.parent.getComponent("target").transform.x
      this.transform.y = this.parent.getComponent("target").transform.y
      this.waitToFireIntervalTime =50;
      this.canFireFlag = false;
    }
    update(){
      
      if(this.waitToFireIntervalTime == 50) {
        
        this.canFireFlag = !this.canFireFlag;
        this.waitToFireIntervalTime = 0;
      } else {
        this.waitToFireIntervalTime++;
      }
      
      if( this.shootIntervalTime == 8){
        if(this.canFireFlag) {
          let leftProjectile = new ProjectileGameObject();
          leftProjectile.name = "enemyProjectile";
          leftProjectile.x = this.parent.getComponent("target").transform.x
          leftProjectile.y = this.parent.getComponent("target").transform.y
          leftProjectile.rotate = -1
          GameObject.instantiate(leftProjectile);
        }
        this.shootIntervalTime = 0;   
      } else {
        this.shootIntervalTime++;
      }
    }
}

  window.EnemyShootController = EnemyShootController;