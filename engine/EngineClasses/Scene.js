class Scene {
    gameObjects = []
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