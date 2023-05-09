class DrawBackground extends Component {
    draw(ctx) {
        //draw ocean
        ctx.fillStyle = "steelblue";
        ctx.fillRect(0 - EngineGlobals.logicalWidth/2, 0 - EngineGlobals.logicalHeight/2, EngineGlobals.logicalWidth, EngineGlobals.logicalHeight)
    }
}

window.DrawBackground = DrawBackground;