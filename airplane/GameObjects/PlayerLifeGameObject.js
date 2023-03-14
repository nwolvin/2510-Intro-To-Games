class PlayerLifeGameObject extends GameObject {
    start(){
        let planeDrawComponent = new PlaneDrawComponent(); 
        planeDrawComponent.name ="planeDrawComponent"; 
        planeDrawComponent.rotate = 1
        this.addComponent(planeDrawComponent);
    }
}

window.PlayerLifeGameObject = PlayerLifeGameObject;