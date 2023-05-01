class ScoreTextControllerComponent extends Component {
    start(){

    }
    update(){  
      let aimScoreComponent = GameObject.getObjectByName("aimScoreGameObject").getComponent("aimScoreComponent");
      let addTarget = GameObject.getObjectByName("addTargetGameObject").getComponent("addTargetComponent"); 
      this.parent.text = aimScoreComponent.hits+"/"+addTarget.targetsCount
    }
  }
window.ScoreTextControllerComponent=ScoreTextControllerComponent