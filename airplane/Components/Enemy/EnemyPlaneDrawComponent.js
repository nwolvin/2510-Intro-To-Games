class EnemyPlaneDrawComponent extends Component {

    draw(ctx) {
        if( this.parent.getComponent("target").startDraw){
            let ellipseCounterClockwise = false; 

            if(this.rotate == 1) {
                ellipseCounterClockwise = true;
            } 
    
            ctx.beginPath()
            ctx.fillStyle="lightgray"
            ctx.ellipse(this.transform.x-90*this.parent.planeScale*this.rotate, this.transform.y-40*this.parent.planeScale*this.rotate, 14*this.parent.planeScale, 50*this.parent.planeScale, Math.PI*3/2, 0, Math.PI, ellipseCounterClockwise);
            ctx.fill()
            ctx.stroke()
            ctx.closePath()
        
            ctx.beginPath()
            ctx.fillStyle="lightgray"
            ctx.ellipse(this.transform.x+90*this.parent.planeScale*this.rotate, this.transform.y-40*this.parent.planeScale*this.rotate, 14*this.parent.planeScale, 50*this.parent.planeScale, Math.PI/2, 0, Math.PI, ellipseCounterClockwise);
            ctx.fill()
            ctx.stroke()
            ctx.closePath()
            
        
            ctx.beginPath()
            ctx.fillStyle="lightgray"
            ctx.ellipse(this.transform.x, this.transform.y+66*this.parent.planeScale*this.rotate, 12*this.parent.planeScale, 60*this.parent.planeScale, Math.PI*3/2, 0, Math.PI, ellipseCounterClockwise);
            ctx.fill()
            ctx.stroke()
            ctx.closePath()
        
            ctx.beginPath()
            ctx.fillStyle="lightgray"
            ctx.ellipse(this.transform.x, this.transform.y+66*this.parent.planeScale*this.rotate, 12*this.parent.planeScale, 60*this.parent.planeScale, Math.PI*3/2, 0, Math.PI, !ellipseCounterClockwise);
            ctx.fill()
            ctx.stroke()
            ctx.closePath()
        
        
        
        
            ctx.beginPath();
            ctx.fillStyle = "lightgray"
            
        
            //Left wing
            ctx.moveTo(this.transform.x-12*this.parent.planeScale*this.rotate, this.transform.y-95*this.parent.planeScale*this.rotate);
            ctx.lineTo(this.transform.x-10*this.parent.planeScale*this.rotate, this.transform.y-67*this.parent.planeScale*this.rotate)
            //ctx.lineTo(this.transform.x-35*this.parent.planeScale*this.rotate, this.transform.y-60*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-97*this.parent.planeScale*this.rotate, this.transform.y-54*this.parent.planeScale*this.rotate)
            
            
            ctx.lineTo(this.transform.x-97*this.parent.planeScale*this.rotate, this.transform.y-26*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-10*this.parent.planeScale*this.rotate, this.transform.y-15*this.parent.planeScale*this.rotate)
            
            ctx.lineTo(this.transform.x-8*this.parent.planeScale*this.rotate, this.transform.y+50*this.parent.planeScale*this.rotate)
        
            ctx.lineTo(this.transform.x-50*this.parent.planeScale*this.rotate, this.transform.y+60*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-48*this.parent.planeScale*this.rotate, this.transform.y+73*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-8*this.parent.planeScale*this.rotate, this.transform.y+78*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-1*this.parent.planeScale*this.rotate, this.transform.y+78*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x, this.transform.y+100*this.parent.planeScale*this.rotate)
            //Right wing
            
            ctx.lineTo(this.transform.x+1*this.parent.planeScale*this.rotate, this.transform.y+78*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+8*this.parent.planeScale*this.rotate, this.transform.y+78*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+48*this.parent.planeScale*this.rotate, this.transform.y+73*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+50*this.parent.planeScale*this.rotate, this.transform.y+60*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+8*this.parent.planeScale*this.rotate, this.transform.y+50*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+10*this.parent.planeScale*this.rotate, this.transform.y-15*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+97*this.parent.planeScale*this.rotate, this.transform.y-26*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+97*this.parent.planeScale*this.rotate, this.transform.y-54*this.parent.planeScale*this.rotate)
            //ctx.lineTo(this.transform.x+35*this.parent.planeScale*this.rotate, this.transform.y-60*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+10*this.parent.planeScale*this.rotate, this.transform.y-67*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+12*this.parent.planeScale*this.rotate, this.transform.y-95*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-12*this.parent.planeScale*this.rotate, this.transform.y-95*this.parent.planeScale*this.rotate)
            ctx.stroke();
            ctx.fill()
        
            if(this.propeller) {
                ctx.moveTo(this.transform.x+3*this.parent.planeScale*this.rotate, this.transform.y-105*this.parent.planeScale*this.rotate)
                ctx.lineTo(this.transform.x+23*this.parent.planeScale*this.rotate, this.transform.y-105*this.parent.planeScale*this.rotate)
                this.propeller = false;
            } else {
                ctx.moveTo(this.transform.x-3*this.parent.planeScale*this.rotate, this.transform.y-105*this.parent.planeScale*this.rotate)
                ctx.lineTo(this.transform.x-23*this.parent.planeScale*this.rotate, this.transform.y-105*this.parent.planeScale*this.rotate)
                this.propeller = true; 
            }
            ctx.stroke();
            ctx.fill()
        
            //Nose Cone
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.ellipse(this.transform.x, this.transform.y-95*this.parent.planeScale*this.rotate, 5*this.parent.planeScale, 15*this.parent.planeScale, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
        
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.ellipse(this.transform.x, this.transform.y-95*this.parent.planeScale*this.rotate, 11*this.parent.planeScale, 5*this.parent.planeScale, 0, 0, 2*Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
            
        
            //Cockpit
            ctx.beginPath()
            ctx.fillStyle="LightBlue"
            ctx.ellipse(this.transform.x, this.transform.y-50*this.parent.planeScale*this.rotate, 10*this.parent.planeScale, 12*this.parent.planeScale, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.ellipse(this.transform.x, this.transform.y-50*this.parent.planeScale*this.rotate, 10*this.parent.planeScale, 50*this.parent.planeScale, 0, 0, Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
        
            //Cockpit Canopy
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x - 4*this.parent.planeScale*this.rotate, this.transform.y-61*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-  4 *this.parent.planeScale*this.rotate, this.transform.y-4*this.parent.planeScale*this.rotate)
            ctx.stroke()
            ctx.fill()
        
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x + 4*this.parent.planeScale*this.rotate, this.transform.y-61*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x +  4 *this.parent.planeScale*this.rotate, this.transform.y-4*this.parent.planeScale*this.rotate)
            ctx.stroke()
            ctx.fill()
        
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x - 4*this.parent.planeScale*this.rotate, this.transform.y-50*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x +  4 *this.parent.planeScale*this.rotate, this.transform.y-50*this.parent.planeScale*this.rotate)
            ctx.stroke()
            ctx.fill()
        
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x - 4*this.parent.planeScale*this.rotate, this.transform.y-40*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x +  4 *this.parent.planeScale*this.rotate, this.transform.y-40*this.parent.planeScale*this.rotate)
            ctx.stroke()
            ctx.fill()
        
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x - 4*this.parent.planeScale*this.rotate, this.transform.y-30*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x +  4 *this.parent.planeScale*this.rotate, this.transform.y-30*this.parent.planeScale*this.rotate)
            ctx.stroke()
            ctx.fill()
        
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x - 4*this.parent.planeScale*this.rotate, this.transform.y-20*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x +  4 *this.parent.planeScale*this.rotate, this.transform.y-20*this.parent.planeScale*this.rotate)
            ctx.stroke()
            ctx.fill()
        
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x - 4*this.parent.planeScale*this.rotate, this.transform.y-10*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x +  4 *this.parent.planeScale*this.rotate, this.transform.y-10*this.parent.planeScale*this.rotate)
            ctx.stroke()
            ctx.fill()
        
            //Tail
        
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.moveTo(this.transform.x-1*this.parent.planeScale*this.rotate, this.transform.y+85*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x, this.transform.y+100*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+1*this.parent.planeScale*this.rotate, this.transform.y+85*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-1*this.parent.planeScale*this.rotate, this.transform.y+85*this.parent.planeScale*this.rotate)
            ctx.stroke()
            ctx.fill()
            
        
        
        
            //Fill Line for Wing
            ctx.beginPath()
            ctx.fillStyle="lightgray"
            ctx.ellipse(this.transform.x-90*this.parent.planeScale*this.rotate, this.transform.y-40*this.parent.planeScale*this.rotate, 14*this.parent.planeScale, 50*this.parent.planeScale, Math.PI*3/2, 0, Math.PI, ellipseCounterClockwise);
            ctx.fill()
        
            ctx.closePath()
        
            ctx.beginPath()
            ctx.fillStyle="lightgray"
            ctx.ellipse(this.transform.x+90*this.parent.planeScale*this.rotate, this.transform.y-40*this.parent.planeScale*this.rotate, 14*this.parent.planeScale, 50*this.parent.planeScale, Math.PI/2, 0, Math.PI, ellipseCounterClockwise);
            ctx.fill()
        
            ctx.closePath()
        
            ctx.beginPath()
            ctx.fillStyle="lightgray"
            ctx.ellipse(this.transform.x + 1*this.parent.planeScale*this.rotate, this.transform.y+66*this.parent.planeScale*this.rotate, 12*this.parent.planeScale, 60*this.parent.planeScale, Math.PI*3/2, 0, Math.PI, ellipseCounterClockwise);
            ctx.fill()
        
            ctx.closePath()
        
            ctx.beginPath()
            ctx.fillStyle="lightgray"
            ctx.ellipse(this.transform.x - 1*this.parent.planeScale*this.rotate, this.transform.y+66*this.parent.planeScale*this.rotate, 12*this.parent.planeScale, 60*this.parent.planeScale, Math.PI*3/2, 0, Math.PI, !ellipseCounterClockwise);
            ctx.fill()
            
            ctx.closePath()
        
            ctx.beginPath()
            ctx.fillStyle="lightgray"
            ctx.ellipse(this.transform.x, this.transform.y+65*this.parent.planeScale*this.rotate, 2*this.parent.planeScale, 25*this.parent.planeScale, 0, 0, Math.PI, ellipseCounterClockwise);
            ctx.ellipse(this.transform.x, this.transform.y+65*this.parent.planeScale*this.rotate, 2*this.parent.planeScale, 25*this.parent.planeScale, 0, 0, Math.PI, !ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
        
            //Circles
            ctx.beginPath()
            ctx.fillStyle="firebrick"
            ctx.ellipse(this.transform.x-115*this.parent.planeScale*this.rotate, this.transform.y-42*this.parent.planeScale*this.rotate, 8*this.parent.planeScale, 8*this.parent.planeScale, 0, 0, Math.PI*2, ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
        
            ctx.beginPath()
            ctx.fillStyle="firebrick"
            ctx.ellipse(this.transform.x+115*this.parent.planeScale*this.rotate, this.transform.y-42*this.parent.planeScale*this.rotate, 8*this.parent.planeScale, 8*this.parent.planeScale, 0, 0, Math.PI*2, ellipseCounterClockwise);
            ctx.stroke()
            ctx.fill()
        
            //Stripes
            ctx.beginPath()
            ctx.fillStyle="firebrick"
            ctx.moveTo(this.transform.x-9*this.parent.planeScale*this.rotate, this.transform.y+35*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+9*this.parent.planeScale*this.rotate, this.transform.y+35*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+9*this.parent.planeScale*this.rotate, this.transform.y+30*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-9*this.parent.planeScale*this.rotate, this.transform.y+30*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-9*this.parent.planeScale*this.rotate, this.transform.y+35*this.parent.planeScale*this.rotate)
            ctx.stroke()
            ctx.fill()
        
            //Stripes
            ctx.beginPath()
            ctx.fillStyle="firebrick"
            ctx.moveTo(this.transform.x-9*this.parent.planeScale*this.rotate, this.transform.y+25*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+9*this.parent.planeScale*this.rotate, this.transform.y+25*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x+9*this.parent.planeScale*this.rotate, this.transform.y+20*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-9*this.parent.planeScale*this.rotate, this.transform.y+20*this.parent.planeScale*this.rotate)
            ctx.lineTo(this.transform.x-9*this.parent.planeScale*this.rotate, this.transform.y+25*this.parent.planeScale*this.rotate)
        
            ctx.stroke()
            ctx.fill()
        }   
    }
}
window.EnemyPlaneDrawComponent = EnemyPlaneDrawComponent;
