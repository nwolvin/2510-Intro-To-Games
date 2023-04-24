class TargetGameObject extends GameObject {
    constructor(x, y){
        super();
        this.initX = x; 
        this.initY = y;
    }
    
    start(){
        this.fillStyle = "red";
        this.width = 20; 
        this.height = 20; 
        let targetComponent = new TargetComponent(); 
       targetComponent.name = "target";
       this.addComponent(targetComponent); 
       this.addComponent(new RectangleDrawComponent()); 
    }
}
window.TargetGameObject = TargetGameObject; 