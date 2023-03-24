class SceneManager {
    static scenes = []
    static currentSceneIndex = 0
    static changedSceneFlag = true
    static previousSceneIndex = -1
    static startScenes(scenes, title){
        SceneManager.setScenes(scenes)
        start(title)
    }
    static setScenes(scenes){
        //Same as addScenes, but we clear any scenes first
        SceneManager.currentSceneIndex = 1;
        SceneManager.changedScene = true;
        SceneManager.scenes = []
        SceneManager.addScenes(scenes);
    }
    static addScenes(scenes){
        for(let scene of scenes){
            SceneManager.addScene(scene);
        }
    }
    static addScene(scene) {
        SceneManager.scenes.push(scene)
    }
    static getActiveScene() {
        return SceneManager.scenes[SceneManager.currentSceneIndex];
    }
    
    static getPreviousScene() {
        if(SceneManager.previousSceneIndex == -1){
            return
        }
        return SceneManager.scenes[SceneManager.previousSceneIndex];
    }
    static changeScene(index) {
        SceneManager.currentSceneIndex = index
        SceneManager.changedSceneFlag = true
    }
    static changeScene(index) {
        SceneManager.previousSceneIndex = SceneManager.currentSceneIndex;
        SceneManager.currentSceneIndex = index
        SceneManager.changedSceneFlag = true
    }
    
}

window.SceneManager = SceneManager;