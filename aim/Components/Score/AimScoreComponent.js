class AimScoreComponent extends Component {
    start() {
        this.name = "aimScoreComponent";
        this.targetTimers = [];
        this.avgReactionTime = 0; 
        this.hits = 0;

    }
    update(){
        if(this.targetTimers.length > 0){
            let i = 0; 
            let sum = 0; 
            while (i < this.targetTimers.length){ 
                if(!Number.isNaN(this.targetTimers[i])){
                    sum += this.targetTimers[i];
                }
                i++; 
            }
            this.avgReactionTime = sum/this.targetTimers.length;
        }
    }

    handleUpdate(component, eventName){
        if(eventName == "TargetClicked"){
           this.hits++;
        }
    }
}
window.AimScoreComponent = AimScoreComponent;