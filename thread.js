class Thread {
    constructor(bodyA, pointB) {
        var ThreadOptions = {
            bodyA : bodyA,
            pointB : pointB,
            length : 250,
            stiffness : 0.4
        }

        this.thread = Constraint.create(ThreadOptions);
        World.add(world, this.thread);
    }

    display() {
        var bodyA = this.thread.bodyA.position;
        var pointB = this.thread.pointB;

        strokeWeight(3);
        stroke(255);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
    }
}