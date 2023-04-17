class AddCloudController extends Component {
    start(){


        this.i = 0;

        let cloud1 = new CloudGameObject();
        cloud1.layer = 1; 

        let cloud2 = new CloudGameObject();
        cloud2.layer = 1; 

        GameObject.instantiate(cloud1)
        GameObject.instantiate(cloud2)
        this.addCloudCounter = 0; 
    }
    update(){  
        if( this.addCloudCounter == 0){
            let cloud = new CloudGameObject(); 
            cloud.name = "cloud"
            GameObject.instantiate(cloud);
            this.addCloudCounter = (Math.floor(Math.random() * (5/3*Time.fpsTarget))); ;

          } else {
            this.addCloudCounter--;
          }
     
    
    }
  }
window.AddCloudController=AddCloudController