
class TitleScene extends Scene {
    start(){
        GameObject.instantiate(new GameObject().addComponent(new TitleSceneControllerComponent()));
        GameObject.instantiate(new GameObject().addComponent(new DrawBackground()));

        
    }
}

window.TitleScene=TitleScene;