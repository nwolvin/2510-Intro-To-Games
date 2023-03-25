class AddCloudController extends Component {
    start(){
        this.i = 0;
        GameObject.instantiate(new CloudGameObject)
        GameObject.instantiate(new CloudGameObject)
    }
    update(){  
        if( this.i == 90){
            let cloudGameObject = new CloudGameObject()
            GameObject.instantiate(cloudGameObject)
            this.i = 0
        } else {
            this.i++;
        }
    }
  }
window.AddCloudController=AddCloudController