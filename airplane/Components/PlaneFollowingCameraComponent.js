class PlaneFollowingCameraComponent extends Component{
    start(){
        let plane = GameObject.getObjectByName("plane").getComponent("planeComponent")
        this.transform.x = plane.transform.x;
        this.transform.y = plane.transform.y + EngineGlobals.logicalHeight/2;

    }
    update(){

        let plane = GameObject.getObjectByName("plane").getComponent("planeComponent")
        this.transform.x = plane.transform.x;
        this.transform.y = plane.transform.y - EngineGlobals.logicalHeight/3;
    }
}

window.PlaneFollowingCameraComponent=PlaneFollowingCameraComponent;
