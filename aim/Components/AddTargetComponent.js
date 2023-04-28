class AddTargetComponent extends Component {
    start() {
        this.addTarget = true; 
        this.targetsAddedCount = 0;

    }
    update(){
        if(this.addTarget){
            this.targetsAddedCount++;
            let neg = Math.ceil(Math.random() * 2);
            if(neg % 2 == 0){
                neg = -1; 
            }
            let randx = Math.ceil(neg * Math.random() * (EngineGlobals.logicalWidth*3/8));
            let randy = Math.ceil(neg * Math.random() * (EngineGlobals.logicalHeight*3/8));

            GameObject.instantiate(new TargetGameObject(randx,randy));
            this.addTarget = false; 
        }
    }

    handleUpdate(component, eventName){
        if(eventName == "TargetClicked"){
            if(this.targetsAddedCount == 4){
                console.log("END")
                SceneManager.changeScene(2);
            }else{
                this.addTarget = true;
            }
        }
    }
}
window.AddTargetComponent = AddTargetComponent;