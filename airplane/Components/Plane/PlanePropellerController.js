class PlanePropellerController extends Component {
    start(){
        this.propeller = true; 
    }
    update(){
        if(this.propeller) {
            this.propeller = false; 
        } else {
            this.propeller = true; 
        }
    }
}

window.PlanePropellerController = PlanePropellerController