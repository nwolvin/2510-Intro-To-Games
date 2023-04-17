class CameraFollowingBackground extends Component {
    draw(ctx) {
        //draw ocean

        let plane = GameObject.getObjectByName("plane").getComponent("planeComponent")
        this.transform.x = plane.transform.x;
        this.transform.y = plane.transform.y;

        ctx.fillStyle = "steelblue";
        ctx.fillRect(Camera.main.transform.x - EngineGlobals.logicalWidth/2, Camera.main.transform.y - EngineGlobals.logicalHeight/2, EngineGlobals.logicalWidth, EngineGlobals.logicalHeight)
    }
}

window.CameraFollowingBackground = CameraFollowingBackground;