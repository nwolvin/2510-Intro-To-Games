class TextBoxControllerComponent extends Component {
    start(){
       this.hover = false; 
       this.name = "TextBoxController";
    }
    update(){  
    let mouseX = Camera.screenToLogicalScreenSpace(Input.mouseX, Input.mouseY, canvas.getContext("2d")).x;
    let mouseY = Camera.screenToLogicalScreenSpace(Input.mouseX, Input.mouseY, canvas.getContext("2d")).y;

    if(mouseX > this.transform.x - this.parent.height*2/2 && mouseX < this.transform.x - this.parent.height*2/2 + this.parent.height*2 && mouseY > this.transform.y - this.parent.height/2 && mouseY < this.transform.y - this.parent.height/2 + this.parent.height){
      this.hover = true; 
    } else {
      this.hover = false;
    }

    if(this.hover && Input.mouseDown){
      SceneManager.changeScene(1);
    }
  }
}
window.TextBoxControllerComponent=TextBoxControllerComponent