class TextGameObject extends GameObject {
    constructor(fillStyle, x, y, text, textAlign, font) {
        super();
        this.fillStyle = fillStyle;
        this.x = x;
        this.y = y;
        this.text = text;
        this.textAlign = textAlign;
        this.font = font;
    }

    start(){

        this.addComponent(new TextComponent());
        this.components[0].x = this.x;
        this.components[0].y = this.y; 
        
    }
}

window.TextGameObject = TextGameObject;