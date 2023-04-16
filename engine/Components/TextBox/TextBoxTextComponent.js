class TextBoxTextComponent extends Component {
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
            ctx.fillText( this.parent.text, this.transform.x - this.parent.height + (this.parent.height * 35/100), this.transform.y + (this.parent.height/9))
        }
    }
}

window.TextBoxTextComponent = TextBoxTextComponent;