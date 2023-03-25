class TextBoxGameObject extends GameObject {
    constructor(rectFillStyle = "green", textFillStyle = "white", x, y, height, text, blink) {
        super();
        this.rectFillStyle = rectFillStyle
        this.textFillStyle = textFillStyle;
        this.x = x; 
        this.y = y;
        this.height = height; 
        this.text = text; 
        this.blink = blink;
      }
    
    start(){
        this.font = this.height/3 + "pt Trebuchet MS";
   
        this.addComponent(new TextBoxRectangleComponent());
        this.addComponent(new TextBoxTextComponent());
        



        this.components[0].x = this.x;
        this.components[0].y = this.y; 
        
    }
}

window.TextBoxGameObject = TextBoxGameObject;