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
        if(this.canDrawFlag){
            if(this.parent.highlightOnHover && this.hover){
                ctx.fillStyle = "white";
                ctx.fillRect(this.transform.x-measurements.width * 2 - 3, this.transform.y-6*measurements.actualBoundingBoxAscent - 3, measurements.width * 4 + 6, measurements.actualBoundingBoxAscent * 12 + 6);

            }
          
            ctx.fillStyle = this.parent.rectFillStyle; 
            ctx.fillRect(this.transform.x-measurements.width * 2, this.transform.y-6*measurements.actualBoundingBoxAscent, measurements.width * 4, measurements.actualBoundingBoxAscent * 12);

        }
    }
}

window.TextBoxRectangleComponent = TextBoxRectangleComponent;