class TextBoxGameObject extends GameObject {
    constructor(rectFillStyle = "green", textFillStyle = "white", x, y, text, blink, highlightOnHover, selected) {
        super();
        this.rectFillStyle = rectFillStyle
        this.textFillStyle = textFillStyle;
        this.x = x; 
        this.y = y;
        this.text = text; 
        this.blink = blink;
        this.highlightOnHover = highlightOnHover; 
        this.selected = selected;
      }
    
    start(){
        this.height = canvas.getContext("2d").measureText(this.text).actualBoundingBoxAscent*10; 
        this.font = this.height/3 + "pt Trebuchet MS";
   
        this.addComponent(new TextBoxControllerComponent());
        this.addComponent(new TextBoxRectangleComponent());
        this.addComponent(new TextBoxCenteredTextComponent());
        



        this.components[0].x = this.x;
        this.components[0].y = this.y; 
        
    }
}

window.TextBoxGameObject = TextBoxGameObject;