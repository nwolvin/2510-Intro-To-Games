class GameObject{
    name = ""
    type = ""
    components = []
    started = false
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
}


window.GameObject = GameObject;