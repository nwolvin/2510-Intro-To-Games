class TextGameObject extends GameObject {
    start(){
        let textComponent = new TextComponent(); 
        textComponent.text = this.text; 
        textComponent.fillStyle = this.fillStyle; 
        textComponent.textAlign = this.textAlign; 
        textComponent.font = this.font; 
        this.addComponent(textComponent)
        this.components[0].x = this.x;
        this.components[0].y = this.y; 
        
    }
}

window.TextGameObject = TextGameObject;