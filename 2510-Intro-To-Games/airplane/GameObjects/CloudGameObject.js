class CloudGameObject extends GameObject {
    start(){
        let cloudComponent = new CloudComponent();
        cloudComponent.name = "cloud"; 
        this.addComponent(cloudComponent);
        this.addComponent(new CloudDrawComponent());
    }
}

window.CloudGameObject = CloudGameObject;