class GameObject{
    name = ""
    type = ""
    components = []
    hitboxes = []
    layer = 2
    started = false
    markedForDestroy = false;
    markedDoNotDestroyOnLoad = false;
    constructor(name){
        this.name = name;
        this.addComponent(new Transform());
    }

    id = getNextGameObjectId();
    hasCollision = false; 
    collidableWith = []
    addComponent(component){
        this.components.push(component);
        component.parent = this;
        return this;
    }
    static getObjectByName(name){
        return SceneManager.getActiveScene().gameObjects.find(gameObject=>gameObject.name == name)
    }
    getComponent(name){
        return this.components.find(c=>c.name == name)
    }


    destroy() {
        this.markedForDestroy = true;
    }

    doNotDestroyOnLoad(){
        this.markedDoNotDestroyOnLoad = true;
    }

    static getObjectsByName(name) {
        return SceneManager.getActiveScene().gameObjects.filter(gameObject => gameObject.name == name)
    }
    
    static instantiate(gameObject) {
        SceneManager.getActiveScene().gameObjects.push(gameObject);
        if (gameObject.start && !gameObject.started) {
            gameObject.started = true
            gameObject.start()
        }
    }
}


window.GameObject = GameObject;