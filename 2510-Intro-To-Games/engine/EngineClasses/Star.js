class Star{
    static drawStar(starX, starY, radius, ctx) {
        ctx.beginPath();
        for(var i = 11; i != 0; i--)
        {
            var alpha = (2 * Math.PI) / 10; 
            
            var r = radius*(i % 2 + 1)/2;
            var omega = alpha * i;
            ctx.lineTo((r * Math.sin(omega)) + starX, (r * Math.cos(omega)) + starY);
        }
        ctx.closePath();
        ctx.stroke()
        ctx.fill();
    }
  }
  
  window.Star = Star
  export default Star;