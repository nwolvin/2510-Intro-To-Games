class AddTargetController extends Component {
    start(){
      this.addPlaneCounter = 0;
    }
    update(){

      if( this.addPlaneCounter == 0){
        let target = new TargetGameObject(); 
        target.name = "target"
        SceneManager.getActiveScene().addGameObject(target);
        this.addPlaneCounter = this.direction = (Math.floor(Math.random() * 50)); ;
      } else {
        this.addPlaneCounter--;
      }


    }
  }
  window.AddTargetController=AddTargetController;