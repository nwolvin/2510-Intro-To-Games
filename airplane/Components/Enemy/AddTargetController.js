class AddTargetController extends Component {
    start(){
      this.addPlaneCounter = 0;
    }
    update(){

      if( this.addPlaneCounter == 0){
        let target = new TargetGameObject(); 
        target.name = "target"
        GameObject.instantiate(target);
        this.addPlaneCounter = this.direction = (Math.floor(Math.random() * (5/3*Time.fpsTarget))); ;
      } else {
        this.addPlaneCounter--;
      }


    }
  }
  window.AddTargetController=AddTargetController;