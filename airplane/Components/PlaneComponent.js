class PlaneComponent extends Component {
    start() {
        this.transform.x = window.innerWidth/2;
        this.transform.y = window.innerHeight - window.innerHeight/6;
        this.transform.sx = 7/20
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

        this.invincibleFlag = GameObject.getObjectByName("playerLifeGameObject").getComponent("playerLifeController").invincibleFlag
        //Mouse Movement
      /*
        this.transform.x = mouseLocation.mouseX;
        this.transform.y = mouseLocation.mouseY;
*/


    }

    handleUpdate(component, eventName){
        if(eventName == "PlayerHit"){
            if(this.invincibleFlag == false){
                this.transform.x = window.innerWidth/2;
                this.transform.y = window.innerHeight - window.innerHeight/6;
            }
            
        }
    }
}

window.PlaneComponent = PlaneComponent;