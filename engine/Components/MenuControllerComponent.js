class MenuControllerComponent extends Component {
    start(){
        
    }
    update(){
        if(Input.keysDown.Enter){
            SceneManager.changeScene(1);
        }
    }
}

window.MenuControllerComponent = MenuControllerComponent;