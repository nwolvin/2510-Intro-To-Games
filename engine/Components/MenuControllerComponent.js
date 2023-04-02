class MenuControllerComponent extends Component {
    start(){
        
    }
    update(){
        if(keysDown.Enter){
            SceneManager.changeScene(1);
        }
    }
}

window.MenuControllerComponent = MenuControllerComponent;