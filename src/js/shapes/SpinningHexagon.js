class SpinningHexagon extends Circle {
    constructor() {
        super();
        this.growthSpeed = 1;
    }

    draw() {
        this.size += this.growthSpeed;
        push();
        translate(width / 2, height / 2);
        angleMode(degrees)
        rotate(frameCount / (this.size * 6));
        polygon(0, 0, this.size, 6);
        pop();
    }
}