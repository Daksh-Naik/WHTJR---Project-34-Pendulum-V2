class PendulumBob {
    constructor(x, y, radius) {
        var PendulumBoboptions = {
            restitution : 1.0,
            friction : 0,
            frictionAir : 0.001,
            slop : 1,
            inertia : Infinity
        }
        this.body = Matter.Bodies.circle(x, y, radius, PendulumBoboptions);
        this.radius = radius;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        strokeWeight(4);
        stroke(255);
        fill(0, 0, 0);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
        pop();
    }
}