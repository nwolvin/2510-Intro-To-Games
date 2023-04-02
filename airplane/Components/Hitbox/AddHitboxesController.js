class AddHitboxesController extends Component {
    start(){
        for(let i = 0; i < this.parent.hitboxes.length; i++){
            let plane = GameObject.getObjectByName("plane").getComponent("planeComponent")
            let lives = GameObject.getObjectByName("playerLifeGameObject").getComponent("playerLifeController")
            let score = GameObject.getObjectByName("scoreGameObject").getComponent("scoreTextController")
            
            let hitBox = new HitboxControllerComponent();
            hitBox.x1Params = this.parent.hitboxes[i].x1Params; 
            hitBox.y1Params = this.parent.hitboxes[i].y1Params;
            hitBox.x2Params = this.parent.hitboxes[i].x2Params;
            hitBox.y2Params = this.parent.hitboxes[i].y2Params;
            hitBox.idx = i; 

            hitBox.addListener(this)
            hitBox.addListener(plane)
            hitBox.addListener(lives)
            hitBox.addListener(score)

            this.parent.addComponent(hitBox);
        }
    }
    update(){
        
    }
  }
  window.AddHitboxesController=AddHitboxesController;