class AddCloudController extends Component {
    start(){


        this.i = 0;

        let cloud1 = new CloudGameObject();
        cloud1.layer = 1; 

        let cloud2 = new CloudGameObject();
        cloud2.layer = 1; 

        GameObject.instantiate(cloud1)
        GameObject.instantiate(cloud2)
    }
    update(){  
        if( this.i == Time.fpsTarget*3){
            let cloudGameObject = new CloudGameObject()
            cloudGameObject.layer = 1; 

            GameObject.instantiate(cloudGameObject)
            this.i = 0
        } else {
            this.i++;
        }
    }
  }
window.AddCloudController=AddCloudController