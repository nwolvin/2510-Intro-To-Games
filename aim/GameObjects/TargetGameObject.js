class TargetGameObject extends GameObject {
    constructor(x, y){
        super();
        this.initX = x; 
        this.initY = y;    
    }
    
    start(){
        this.components[0].x = 1000000000;
        this.components[0].y = 1000000000;
        let addTarget = GameObject.getObjectByName("addTargetGameObject").getComponent("addTargetComponent")
        this.fillStyle = "red";
        this.width = 20; 
        this.height = 20; 
        let targetComponent = new TargetComponent(); 
       targetComponent.name = "target";
       targetComponent.addListener(addTarget); 
       this.addComponent(targetComponent); 
       this.addComponent(new RectangleDrawComponent()); 
    }
}
window.TargetGameObject = TargetGameObject; 