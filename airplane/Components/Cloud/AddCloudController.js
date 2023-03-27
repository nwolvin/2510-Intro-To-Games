class AddCloudController extends Component {
    constructor(num){
        super();
        this.cloudArrayLocation = num; 
    }
    start(){


        this.i = 0;
        GameObject.instantiateGameObjectAtLocation(new CloudGameObject, this.cloudArrayLocation)
        GameObject.instantiateGameObjectAtLocation(new CloudGameObject, this.cloudArrayLocation)
    }
    update(){  
        if( this.i == 90){
            let cloudGameObject = new CloudGameObject()
            GameObject.instantiateGameObjectAtLocation(cloudGameObject, this.cloudArrayLocation)
            this.i = 0
        } else {
            this.i++;
        }
    }
  }
window.AddCloudController=AddCloudController