class AddCloudController extends Component {
    start(){
        this.i = 0;
        SceneManager.getActiveScene().addGameObject(new CloudGameObject)
        SceneManager.getActiveScene().addGameObject(new CloudGameObject)

    }
    update(){  
        if( this.i == 90){
            let cloudGameObject = new CloudGameObject()
            SceneManager.getActiveScene().addGameObject(cloudGameObject)
            this.i = 0
        } else {
            this.i++;
        }
    }
  }
window.AddCloudController=AddCloudController