class PlaneFollowingCameraComponent extends Component{
    start(){
        let plane = GameObject.getObjectByName("plane").getComponent("planeComponent")
        this.transform.x = plane.transform.x;
        this.transform.y = plane.transform.y + EngineGlobals.logicalHeight/2;

    }
    update(){

        let plane = GameObject.getObjectByName("plane").getComponent("planeComponent")

        let xDif = plane.transform.x- this.transform.x;
        let yDif = (plane.transform.y - EngineGlobals.logicalHeight/3) - this.transform.y
       
        this.transform.x += .05 * xDif;
        this.transform.y += .05 * yDif;
    }
}

window.PlaneFollowingCameraComponent=PlaneFollowingCameraComponent;
