class AddTargetComponent extends Component {
    start() {
        this.addTarget = true; 

    }
    update(){
        if(this.addTarget){
            let neg = Math.ceil(Math.random() * 2);
            if(neg % 2 == 0){
                neg = -1; 
            }
            let randx = Math.ceil(neg * Math.random() * EngineGlobals.logicalWidth/2);
            let randy = Math.ceil(neg * Math.random() * EngineGlobals.logicalHeight/2);

            GameObject.instantiate(new TargetGameObject(randx,randy));
            this.addTarget = false; 
        }
    }

    handleUpdate(component, eventName){
        if(eventName == "TargetClicked"){
            this.addTarget = true;
        }
    }
}
window.AddTargetComponent = AddTargetComponent;