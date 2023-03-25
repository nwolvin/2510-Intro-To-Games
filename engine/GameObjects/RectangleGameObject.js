class RectangleGameObject extends GameObject {
    start(){
        let rectangleComponent = new RectangleComponent(); 
        rectangleComponent.fillStyle = this.fillStyle; 
        rectangleComponent.width = this.width; 
        rectangleComponent.height = this.height; 
        this.addComponent(rectangleComponent)
        this.components[0].x = this.x;
        this.components[0].y = this.y; 
        
    }
}

window.RectangleGameObject = RectangleGameObject;