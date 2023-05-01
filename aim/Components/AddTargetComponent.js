class AddTargetComponent extends Component {
    constructor(targetsCount){
        super()
        this.targetsCount = targetsCount;
    }
    
    start() {
        this.addTarget = true; 
        this.targetsAddedCount = 0;
        this.startTime = Time.secondsCount;
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
            if(this.targetsAddedCount == this.targetsCount){
                Cookie.setCookie("avgReactionTime", Time.getTimeString(GameObject.getObjectByName("aimScoreGameObject").getComponent("aimScoreComponent").avgReactionTime))
                Cookie.setCookie("totalTime", Time.getTimeString(Time.secondsCount-this.startTime));
                
                SceneManager.changeScene(2);
            }else{
                this.addTarget = true;
            }
        }
    }

}
window.AddTargetComponent = AddTargetComponent;