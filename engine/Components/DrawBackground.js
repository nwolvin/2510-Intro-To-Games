class DrawBackground extends Component {
    draw(ctx) {
        //draw ocean
        ctx.fillStyle = "steelblue";
        ctx.fillRect(0 - logicalWidth/2, 0 - logicalHeight/2, logicalWidth, logicalHeight)
    }
}

window.DrawBackground = DrawBackground;