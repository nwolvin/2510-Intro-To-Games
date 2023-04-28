class TextBoxCenteredTextComponent extends Component {
    drawGUI(ctx){

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

        if(this.canDrawFlag){
            ctx.textAlign = this.textAlign;
            ctx.fillStyle = this.parent.textFillStyle;
            ctx.font = this.parent.font; 
            let measurements = ctx.measureText(this.parent.text);
            ctx.fillText( this.parent.text, this.transform.x-measurements.width/2, this.transform.y+measurements.actualBoundingBoxAscent/2)
        }
    }
}

window.TextBoxCenteredTextComponent = TextBoxCenteredTextComponent;