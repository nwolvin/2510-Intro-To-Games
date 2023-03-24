class PlaneDrawComponent extends Component {
    draw(ctx) {
        if(GameObject.getObjectByName("playerLifeGameObject").getComponent("playerLifeController").invincibleFlag && this.parent.name == "plane")
        {  
            if( this.canShowCounter == 5){
                this.canDrawFlag =  !this.canDrawFlag
                this.canShowCounter = 0
            } else {
                this.canShowCounter++;
            }
        }  else {
            this.canShowCounter = 0
            this.canDrawFlag = true
        }
        
        if(this.canDrawFlag){
            let ellipseCounterClockwise = false; 
            if(this.rotate == 1) {
                ellipseCounterClockwise = true;
            } 
            ctx.beginPath();
            ctx.fillStyle = "slategrey"
            ctx.moveTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-100*this.transform.sx*this.rotate);
            ctx.lineTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-70*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-120*this.transform.sx*this.rotate, this.transform.y-55*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-120*this.transform.sx*this.rotate, this.transform.y-25*this.transform.sx*this.rotate)
        
            ctx.lineTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-10*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-8*this.transform.sx*this.rotate, this.transform.y+50*this.transform.sx*this.rotate)
    
            ctx.lineTo(this.transform.x-50*this.transform.sx*this.rotate, this.transform.y+60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-48*this.transform.sx*this.rotate, this.transform.y+75*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-8*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x, this.transform.y+100*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+8*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+48*this.transform.sx*this.rotate, this.transform.y+75*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+50*this.transform.sx*this.rotate, this.transform.y+60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+8*this.transform.sx*this.rotate, this.transform.y+50*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+10*this.transform.sx*this.rotate, this.transform.y-10*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+120*this.transform.sx*this.rotate, this.transform.y-25*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+120*this.transform.sx*this.rotate, this.transform.y-55*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+10*this.transform.sx*this.rotate, this.transform.y-70*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+10*this.transform.sx*this.rotate, this.transform.y-100*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-10*this.transform.sx*this.rotate, this.transform.y-100*this.transform.sx*this.rotate)
            ctx.stroke();
            ctx.fill()
    
            if(this.propeller) {
                ctx.moveTo(this.transform.x+9*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
                ctx.lineTo(this.transform.x+29*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
                this.propeller = false;
            } else {
                ctx.moveTo(this.transform.x-9*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
                ctx.lineTo(this.transform.x-29*this.transform.sx*this.rotate, this.transform.y-105*this.transform.sx*this.rotate)
                this.propeller = true; 
            }
            ctx.stroke();
            ctx.fill()
    
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.moveTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-13*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y-11*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y-66*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.stroke();
            ctx.fill()
            //Stripe
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.moveTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-13*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y-11*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y-66*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y-60*this.transform.sx*this.rotate)
            ctx.stroke();
            ctx.fill()
            ctx.beginPath();
            ctx.moveTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y+78*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y+82*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-20*this.transform.sx*this.rotate, this.transform.y+53*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
            ctx.stroke();
            ctx.fill()
            ctx.beginPath();
            ctx.moveTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y+78*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y+82*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+20*this.transform.sx*this.rotate, this.transform.y+53*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+35*this.transform.sx*this.rotate, this.transform.y+56*this.transform.sx*this.rotate)
            ctx.stroke();
            ctx.fillStyle="black"
            ctx.fill()
    
            //American Star Insignia
            ctx.beginPath()
            ctx.fillStyle="white"
            ctx.moveTo(this.transform.x-115*this.transform.sx*this.rotate, this.transform.y-48*this.transform.sx*this.rotate);
            ctx.lineTo(this.transform.x-75*this.transform.sx*this.rotate, this.transform.y-48*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-75*this.transform.sx*this.rotate, this.transform.y-40*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-115*this.transform.sx*this.rotate, this.transform.y-40*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-115*this.transform.sx*this.rotate, this.transform.y-48*this.transform.sx*this.rotate)
            ctx.fill()
            ctx.stroke()
            ctx.fillStyle="black"
            ctx.beginPath()
            ctx.arc(this.transform.x-95*this.transform.sx*this.rotate, this.transform.y-44*this.transform.sx*this.rotate, 10*this.transform.sx, 0, Math.PI * 2)
            ctx.stroke()
            ctx.fill()
            ctx.fillStyle="white"
            drawStar(this.transform.x-95*this.transform.sx*this.rotate, this.transform.y-44*this.transform.sx*this.rotate, 9*this.transform.sx*this.rotate)  
    
            //Cockpit
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.ellipse(this.transform.x, this.transform.y-100*this.transform.sx*this.rotate, 9*this.transform.sx, 20*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.ellipse(this.transform.x, this.transform.y-50*this.transform.sx*this.rotate, 9*this.transform.sx, 60*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.ellipse(this.transform.x, this.transform.y-50*this.transform.sx*this.rotate, 9*this.transform.sx, 50*this.transform.sx, 0, 0, Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            
            ctx.beginPath()
            ctx.fillStyle="LightBlue"
            ctx.ellipse(this.transform.x, this.transform.y-42*this.transform.sx*this.rotate, 10*this.transform.sx, 12*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.ellipse(this.transform.x, this.transform.y-42*this.transform.sx*this.rotate, 10*this.transform.sx, 50*this.transform.sx, 0, 0, Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x, this.transform.y+8*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x, this.transform.y+15*this.transform.sx*this.rotate)
            ctx.stroke()
            ctx.fill()
    
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x-1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x, this.transform.y+100*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x+1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.lineTo(this.transform.x-1*this.transform.sx*this.rotate, this.transform.y+85*this.transform.sx*this.rotate)
            ctx.stroke()
            ctx.fill()
    
            ctx.beginPath()
            ctx.fillStyle="slategrey"
            ctx.ellipse(this.transform.x, this.transform.y+65*this.transform.sx*this.rotate, 2*this.transform.sx, 25*this.transform.sx, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.ellipse(this.transform.x, this.transform.y+65*this.transform.sx*this.rotate, 2*this.transform.sx, 25*this.transform.sx, 0, 0, Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
        } 
    }     
}

window.PlaneDrawComponent = PlaneDrawComponent;