class TitleSceneControllerComponent extends Component {
    start(){
       this.name = "titleController"
    }
    update(){
        if(keysDown.Enter){
            SceneManager.changeScene(1);
        }
    }
  }
  window.TitleSceneControllerComponent=TitleSceneControllerComponent;