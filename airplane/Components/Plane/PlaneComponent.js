class PlaneComponent extends Component {
    start() {
        this.transform.x = 0;
        this.transform.y = 0 + EngineGlobals.logicalHeight/2 - EngineGlobals.logicalHeight/6;
        this.rotate = 1
    }
    update() {
        //Keyboard Movement
        if(Input.keysDown["ArrowRight"] || Input.keysDown["d"]){
            this.transform.x +=12*30*Time.deltaTime;
        }
        if(Input.keysDown["ArrowLeft"] || Input.keysDown["a"]){
            this.transform.x -=12*30*Time.deltaTime;
        }
        if(Input.keysDown["ArrowUp"] || Input.keysDown["w"]){
            this.transform.y -=12*30*Time.deltaTime;
        }
        if(Input.keysDown["ArrowDown"] || Input.keysDown["s"]){
            this.transform.y +=12*30*Time.deltaTime;
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
                this.transform.y = 0 + EngineGlobals.logicalHeight/2 - EngineGlobals.logicalHeight/6;
            }
            
        }
    }
}

window.PlaneComponent = PlaneComponent;