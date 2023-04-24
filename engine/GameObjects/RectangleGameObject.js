class RectangleGameObject extends GameObject {
   constructor(x, y, fillStyle = "red", width, height){
    super();
    this.x = x; 
    this.y = y; 
    this.fillStyle = fillStyle;
    this.width = width; 
    this.height = height; 
   }
   
    start(){
        this.addComponent(new RectangleComponent())       
        this.addComponent(new RectangleDrawComponent()); 
    }
}

window.RectangleGameObject = RectangleGameObject;