class PlayerLifeController extends Component {
    constructor(lives){
        super()
        this.livesCount = lives;
    }
    
    start() { 
        this.invincibleCounter = 0
        this.invincibleFlag = false
      for(let i = 0; i < this.livesCount; i++){
        let playerLifeGameObject = new PlayerLifeGameObject()
        playerLifeGameObject.name="playerLifeIndicatorGameObject"
        let playerLifeIndicator = new PlayerLifeIndicatorComponent(); 
        playerLifeIndicator.idx = i;
        playerLifeIndicator.name = "lifeInd"

        playerLifeGameObject.addComponent(playerLifeIndicator)

      /*  playerLifeGameObject.components[0].x = 0;
        playerLifeGameObject.components[0].y = canvas.height/6;*/

        GameObject.instantiate(playerLifeGameObject);

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
            if(objects.length > 1) {
                for (let i = objects.length - 1; i >= 0; i--){
                    if(objects[i].getComponent("lifeInd").idx == i){
                        objects[i].markedForDestroy = true;
                        this.invincibleFlag = true;
                    break; 
                    }
                }
               } else {
                SceneManager.changeScene(2);

               }
           }
            this.livesCount--

        }
    }
}

window.PlayerLifeController = PlayerLifeController;