class Scene {
    gameObjects = []
    
    constructor(fillStyle){
        this.addGameObject(new GameObject("CameraGameObject").addComponent(new Camera(fillStyle)))
      }
    
    addGameObject(gameObject){
        this.gameObjects.push(gameObject);
        if(gameObject.start && !gameObject.started){
            gameObject.started = true
            gameObject.start()
        }
        addNextGameObjectId(); 
    }

    getObjectById(id){
        return SceneManager.getActiveScene().gameObjects.find(gameObject=>gameObject.id == id)
    }
    getObjectIndexById(id){
        return SceneManager.getActiveScene().gameObjects.findIndex(gameObject=>gameObject.id == id)
    }

}

window.Scene = Scene;