class TextBoxRectangleComponent extends Component {
    drawGUI(ctx){
        this.hover = this.parent.getComponent("TextBoxController").hover;
        
        
        if(this.canDrawFlag == undefined){
            this.canDrawFlag = true;
        }
        if(this.canShowCounter == undefined){
            this.canShowCounter = 0;
        }
        
        if(this.parent.blink) {
            if( (this.canShowCounter == Math.ceil(Time.fpsTarget/2)) && !this.canDrawFlag){ //Time blink is not shown
                this.canDrawFlag =  !this.canDrawFlag
                this.canShowCounter = 0
            } else if (this.canShowCounter == Time.fpsTarget && this.canDrawFlag) { //Time blink is shown
                this.canDrawFlag =  !this.canDrawFlag
                this.canShowCounter = 0
            }
               
            else {
                this.canShowCounter++;
            }
        } else {
            this.canDrawFlag = true; 
        }

        let measurements = ctx.measureText(this.parent.text);

        let width = 0; 
        if(measurements.width *16/10 < this.parent.height/2){
            width = this.parent.height/2;
        } else {
            width = measurements.width *16/10;
        }
        if(this.canDrawFlag){
            if((this.parent.highlightOnHover && this.hover) || this.parent.selected){
                ctx.fillStyle = "white";
                ctx.fillRect(this.transform.x - width-3, this.transform.y - this.parent.height/2-3, width*2+6, this.parent.height+6);

            }
          
            ctx.fillStyle = this.parent.rectFillStyle; 
            ctx.fillRect(this.transform.x - width, this.transform.y - this.parent.height/2, width*2, this.parent.height);

        }
    }
}

window.TextBoxRectangleComponent = TextBoxRectangleComponent;