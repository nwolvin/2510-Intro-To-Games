class TitleSceneControllerComponent extends Component {
    start(){
        
    }
    update(){
        if(getKeysUp){
            SceneManager.changeScene(1);
        }
    }
}

window.TitleSceneController = TitleSceneControllerComponent;