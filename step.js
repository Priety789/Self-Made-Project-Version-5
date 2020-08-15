/*
 The step class is created here. It is a stationary body. The only purpose it serves is to 
 keep the stars from reaching the ground where the player can catch them. 
 */

class Step {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
};