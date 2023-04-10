class PlaneComponent extends Component {
    start() {
        this.transform.x = 0;
        this.transform.y = 0 + logicalHeight/2 - logicalHeight/6;
        this.rotate = 1
    }
    update() {
        //Keyboard Movement
        if(keysDown["ArrowRight"] || keysDown["d"]){
            this.transform.x +=12
        }
        if(keysDown["ArrowLeft"] || keysDown["a"]){
            this.transform.x -=12
        }
        if(keysDown["ArrowUp"] || keysDown["w"]){
            this.transform.y -=12
        }
        if(keysDown["ArrowDown"] || keysDown["s"]){
            this.transform.y +=12
        }  

        if(GameObject.getObjectByName("playerLifeGameObject") && GameObject.getObjectByName("playerLifeGameObject").getComponent("playerLifeController")){
            this.invincibleFlag = GameObject.getObjectByName("playerLifeGameObject").getComponent("playerLifeController").invincibleFlag
        } else {
            this.invincibleFlag = false;
        }
       
        
        //Mouse Movement
      /*
        this.transform.x = mouseLocation.mouseX;
        this.transform.y = mouseLocation.mouseY;
*/


    }

    handleUpdate(component, eventName){
        if(eventName == "PlayerHit"){
            if(this.invincibleFlag == false){
                this.transform.x = 0;
                this.transform.y = 0 + logicalHeight/2 - logicalHeight/6;
            }
            
        }
    }
}

window.PlaneComponent = PlaneComponent;