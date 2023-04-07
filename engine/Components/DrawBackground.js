class DrawBackground extends Component {
    draw(ctx) {
        //draw ocean
        ctx.fillStyle = "steelblue";
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}

window.DrawBackground = DrawBackground;