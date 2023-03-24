class PlayerLifeController extends Component {
    start() {
        this.livesCount = 5; 
        this.invincibleCounter = 0
        this.invincibleFlag = false
      for(let i = 0; i < this.livesCount; i++){
        let playerLifeGameObject = new PlayerLifeGameObject()
        playerLifeGameObject.name="playerLifeIndicatorGameObject"
        let playerLifeIndicator = new PlayerLifeIndicatorComponent(); 
        playerLifeIndicator.idx = i;
        playerLifeIndicator.name = "lifeInd"

        playerLifeGameObject.addComponent(playerLifeIndicator)

      /*  playerLifeGameObject.components[0].x = window.innerWidth/2;
        playerLifeGameObject.components[0].y = window.innerHeight/6;*/

        GameObject.instantiate(playerLifeGameObject);
        //console.log(SceneManager.getActiveScene())

        }
    }
    update() {
        if(this.invincibleFlag == true){
            if( this.invincibleCounter == 90){
                this.invincibleFlag = false; 
                this.invincibleCounter = 0
            } else {
                this.invincibleCounter++;
            }
        }
    }

    handleUpdate(component, eventName){
        if(eventName == "PlayerHit"){
           let objects = GameObject.getObjectsByName("playerLifeIndicatorGameObject")
           if(this.invincibleFlag == false) {
            if(objects.length > 0) {
                for (let i = objects.length - 1; i >= 0; i--){
                    if(objects[i].getComponent("lifeInd").idx == i){
                        objects[i].markedForDestroy = true;
                        this.invincibleFlag = true;
                    break; 
                    }
                }
               } else {
                console.log("GAME OVER!")
               }
           }
           
           


           
           
           
           
            this.livesCount--

        }
    }
}

window.PlayerLifeController = PlayerLifeController;