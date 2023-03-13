class DrawBackground extends Component {
    draw(ctx) {
        //draw ocean
        ctx.fillStyle = "steelblue";
        ctx.fillRect(0, 0, ctx.canvas.width, 2000)
    }
}

window.DrawBackground = DrawBackground;