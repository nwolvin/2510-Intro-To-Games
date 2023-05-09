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
        ctx.fillText(Time.formatTimerString(this.startTime), this.transform.x, this.transform.y);
    }
}

window.TimerDrawComponent = TimerDrawComponent;







