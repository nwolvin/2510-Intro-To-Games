class ProjectileGameObject extends GameObject {
    start(){
        let projectileComponent = new ProjectileComponent(); 
        projectileComponent.type = "projectile";
        projectileComponent.name = "projectile"
        
        this.addComponent(projectileComponent);
        this.addComponent(new ProjectileDrawComponent())

    }
}

window.ProjectileGameObject = ProjectileGameObject;