class Arc extends Circle {
    constructor(centerX, centerY, size, growthSpeed, arcWidth = 140) {
        super(centerX, centerY, size, growthSpeed);
        this.arcWidth = arcWidth;
    }

    update() {
        this.size += this.growthSpeed;
    }

    draw() {
        const arcStart = this.size % 360;
        const arcEnd = (this.size + this.arcWidth) % 360;
        angleMode(degrees);
        arc(this.centerX, this.centerY, this.size, this.size, arcEnd, arcStart);
    }
}
