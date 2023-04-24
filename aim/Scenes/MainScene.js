class MainScene extends Scene {
    start() {
        GameObject.instantiate(new TargetGameObject(0,0));
    }
}

window.MainScene=MainScene;