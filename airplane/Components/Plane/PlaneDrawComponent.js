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
            ctx.moveTo(this.transform.x-10*this.parent.planeScale*this.rotate, this.transform.y-100*this.parent.planeScale*this.rotate);
            ctx.lineTo(this.transform.x-10*this.parent.planeScale*this.rotate, this.transform.y-70*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-35*this.parent.planeScale*this.rotate, this.transform.y-60*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-120*this.parent.planeScale*this.rotate, this.transform.y-55*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-120*this.parent.planeScale*this.rotate, this.transform.y-25*this.parent.planeScale*this.rotate)
        
            ctx.lineTo(this.transform.x-10*this.parent.planeScale*this.rotate, this.transform.y-10*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-8*this.parent.planeScale*this.rotate, this.transform.y+50*this.parent.planeScale*this.rotate)
    
            ctx.lineTo(this.transform.x-50*this.parent.planeScale*this.rotate, this.transform.y+60*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-48*this.parent.planeScale*this.rotate, this.transform.y+75*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-8*this.parent.planeScale*this.rotate, this.transform.y+85*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-1*this.parent.planeScale*this.rotate, this.transform.y+85*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x, this.transform.y+100*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+1*this.parent.planeScale*this.rotate, this.transform.y+85*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+8*this.parent.planeScale*this.rotate, this.transform.y+85*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+48*this.parent.planeScale*this.rotate, this.transform.y+75*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+50*this.parent.planeScale*this.rotate, this.transform.y+60*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+8*this.parent.planeScale*this.rotate, this.transform.y+50*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+10*this.parent.planeScale*this.rotate, this.transform.y-10*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+120*this.parent.planeScale*this.rotate, this.transform.y-25*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+120*this.parent.planeScale*this.rotate, this.transform.y-55*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+35*this.parent.planeScale*this.rotate, this.transform.y-60*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+10*this.parent.planeScale*this.rotate, this.transform.y-70*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+10*this.parent.planeScale*this.rotate, this.transform.y-100*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-10*this.parent.planeScale*this.rotate, this.transform.y-100*this.parent.planeScale*this.rotate)
            ctx.stroke();
            ctx.fill()
    
            if(this.propeller) {
                ctx.moveTo(this.transform.x+9*this.parent.planeScale*this.rotate, this.transform.y-105*this.parent.planeScale*this.rotate)
                ctx.lineTo(this.transform.x+29*this.parent.planeScale*this.rotate, this.transform.y-105*this.parent.planeScale*this.rotate)
                this.propeller = false;
            } else {
                ctx.moveTo(this.transform.x-9*this.parent.planeScale*this.rotate, this.transform.y-105*this.parent.planeScale*this.rotate)
                ctx.lineTo(this.transform.x-29*this.parent.planeScale*this.rotate, this.transform.y-105*this.parent.planeScale*this.rotate)
                this.propeller = true; 
            }
            ctx.stroke();
            ctx.fill()
    
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.moveTo(this.transform.x-35*this.parent.planeScale*this.rotate, this.transform.y-60*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-35*this.parent.planeScale*this.rotate, this.transform.y-13*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-20*this.parent.planeScale*this.rotate, this.transform.y-11*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-20*this.parent.planeScale*this.rotate, this.transform.y-66*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-35*this.parent.planeScale*this.rotate, this.transform.y-60*this.parent.planeScale*this.rotate)
            ctx.stroke();
            ctx.fill()
            //Stripe
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.moveTo(this.transform.x+35*this.parent.planeScale*this.rotate, this.transform.y-60*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+35*this.parent.planeScale*this.rotate, this.transform.y-13*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+20*this.parent.planeScale*this.rotate, this.transform.y-11*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+20*this.parent.planeScale*this.rotate, this.transform.y-66*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+35*this.parent.planeScale*this.rotate, this.transform.y-60*this.parent.planeScale*this.rotate)
            ctx.stroke();
            ctx.fill()
            ctx.beginPath();
            ctx.moveTo(this.transform.x-35*this.parent.planeScale*this.rotate, this.transform.y+56*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-35*this.parent.planeScale*this.rotate, this.transform.y+78*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-20*this.parent.planeScale*this.rotate, this.transform.y+82*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-20*this.parent.planeScale*this.rotate, this.transform.y+53*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-35*this.parent.planeScale*this.rotate, this.transform.y+56*this.parent.planeScale*this.rotate)
            ctx.stroke();
            ctx.fill()
            ctx.beginPath();
            ctx.moveTo(this.transform.x+35*this.parent.planeScale*this.rotate, this.transform.y+56*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+35*this.parent.planeScale*this.rotate, this.transform.y+78*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+20*this.parent.planeScale*this.rotate, this.transform.y+82*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+20*this.parent.planeScale*this.rotate, this.transform.y+53*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+35*this.parent.planeScale*this.rotate, this.transform.y+56*this.parent.planeScale*this.rotate)
            ctx.stroke();
            ctx.fillStyle="black"
            ctx.fill()
    
            //American Star Insignia
            ctx.beginPath()
            ctx.fillStyle="white"
            ctx.moveTo(this.transform.x-115*this.parent.planeScale*this.rotate, this.transform.y-48*this.parent.planeScale*this.rotate);
            ctx.lineTo(this.transform.x-75*this.parent.planeScale*this.rotate, this.transform.y-48*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-75*this.parent.planeScale*this.rotate, this.transform.y-40*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-115*this.parent.planeScale*this.rotate, this.transform.y-40*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-115*this.parent.planeScale*this.rotate, this.transform.y-48*this.parent.planeScale*this.rotate)
            ctx.fill()
            ctx.stroke()
            ctx.fillStyle="black"
            ctx.beginPath()
            ctx.arc(this.transform.x-95*this.parent.planeScale*this.rotate, this.transform.y-44*this.parent.planeScale*this.rotate, 10*this.parent.planeScale, 0, Math.PI * 2)
            ctx.stroke()
            ctx.fill()
            ctx.fillStyle="white"
            drawStar(this.transform.x-95*this.parent.planeScale*this.rotate, this.transform.y-44*this.parent.planeScale*this.rotate, 9*this.parent.planeScale*this.rotate)  
    
            //Cockpit
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.ellipse(this.transform.x, this.transform.y-100*this.parent.planeScale*this.rotate, 9*this.parent.planeScale, 20*this.parent.planeScale, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.ellipse(this.transform.x, this.transform.y-50*this.parent.planeScale*this.rotate, 9*this.parent.planeScale, 60*this.parent.planeScale, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.ellipse(this.transform.x, this.transform.y-50*this.parent.planeScale*this.rotate, 9*this.parent.planeScale, 50*this.parent.planeScale, 0, 0, Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            
            ctx.beginPath()
            ctx.fillStyle="LightBlue"
            ctx.ellipse(this.transform.x, this.transform.y-42*this.parent.planeScale*this.rotate, 10*this.parent.planeScale, 12*this.parent.planeScale, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.ellipse(this.transform.x, this.transform.y-42*this.parent.planeScale*this.rotate, 10*this.parent.planeScale, 50*this.parent.planeScale, 0, 0, Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x, this.transform.y+8*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x, this.transform.y+15*this.parent.planeScale*this.rotate)
            ctx.stroke()
            ctx.fill()
    
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x-1*this.parent.planeScale*this.rotate, this.transform.y+85*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x, this.transform.y+100*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+1*this.parent.planeScale*this.rotate, this.transform.y+85*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-1*this.parent.planeScale*this.rotate, this.transform.y+85*this.parent.planeScale*this.rotate)
            ctx.stroke()
            ctx.fill()
    
            ctx.beginPath()
            ctx.fillStyle="slategrey"
            ctx.ellipse(this.transform.x, this.transform.y+65*this.parent.planeScale*this.rotate, 2*this.parent.planeScale, 25*this.parent.planeScale, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.ellipse(this.transform.x, this.transform.y+65*this.parent.planeScale*this.rotate, 2*this.parent.planeScale, 25*this.parent.planeScale, 0, 0, Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
        } 
    }     
}

window.PlaneDrawComponent = PlaneDrawComponent;