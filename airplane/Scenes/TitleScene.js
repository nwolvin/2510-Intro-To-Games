
class TitleScene extends Scene {
    start(){
        this.addGameObject(addText("Airplane Shooter", "60pt serif", "center", "black", window.innerWidth/2, window.innerHeight/2));
        this.addGameObject(GameObject.addComponent(new TitleSceneControllerComponent()))
    }
}

window.TitleScene=TitleScene;