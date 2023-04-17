class PlayerLifeGameObject extends GameObject {
    start(){
        this.planeScale = 1/5;
        let planeDrawComponent = new GUIPlaneDrawComponent(); 
        planeDrawComponent.name ="planeDrawComponent"; 
        planeDrawComponent.rotate = 1
        this.addComponent(planeDrawComponent);  
    }
}

window.PlayerLifeGameObject = PlayerLifeGameObject;