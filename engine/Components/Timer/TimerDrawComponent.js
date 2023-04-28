class TimerDrawComponent extends Component {  
    constructor(font, textAlign, fillStyle, startTime){
        super()
        this.font = font;
        this.textAlign = textAlign; 
        this.fillStyle = fillStyle;
        this.startTime = startTime;
    }
    
    drawGUI(ctx){
        ctx.textAlign =  this.textAlign;
        ctx.fillStyle =   this.fillStyle;
        ctx.font = this.font
        let time =  Time.secondsCount - this.startTime
        let myArray = String(time).split(".");
        let second = "";

        if(myArray.length > 1){
            if(myArray[1].length < 2){
                second = myArray[1].substring(0,1)+"0";
            } else {
                second = myArray[1].substring(0,2);
            }
        } else {
            second = "00"
        }




        ctx.fillText(myArray[0] + "."+second+"s", this.transform.x, this.transform.y);
    }
}

window.TimerDrawComponent = TimerDrawComponent;