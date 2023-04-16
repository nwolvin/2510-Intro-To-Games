class PlanePropellerController extends Component {
    start(){
        this.propeller = true; 
    }
    update(){
        if(Time.frameCount % Time.fpsTarget/30 == 0){
            this.propeller = !this.propeller;
        }
    }
}

window.PlanePropellerController = PlanePropellerController