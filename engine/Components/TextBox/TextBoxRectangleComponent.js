class TextBoxRectangleComponent extends Component {
    
    draw(ctx){
        if(this.canDrawFlag == undefined){
            this.canDrawFlag = true;
        }
        if(this.canShowCounter == undefined){
            this.canShowCounter = 0;
        }

        if(this.parent.blink) {
            if( this.canShowCounter == 15 && !this.canDrawFlag){
                this.canDrawFlag =  !this.canDrawFlag
                this.canShowCounter = 0
            } else if (this.canShowCounter == 30 && this.canDrawFlag) {
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
            ctx.fillStyle = this.parent.rectFillStyle; 
            ctx.fillRect(this.transform.x - this.parent.height*2/2, this.transform.y - this.parent.height/2, this.parent.height*2, this.parent.height);
        }
    }
}

window.TextBoxRectangleComponent = TextBoxRectangleComponent;