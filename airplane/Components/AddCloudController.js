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
window.AddCloudController=AddCloudController