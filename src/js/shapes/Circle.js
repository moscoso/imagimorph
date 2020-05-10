class Circle {

    centerX;
    centerY;
    size;
    growthSpeed;

    constructor(centerX, centerY, size = 1, growthSpeed = 1.5) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.size = size;
        this.growthSpeed = growthSpeed;
    }

    /**
     * Grow according to growthSpeed
     */
    update() {
        this.size += this.growthSpeed;
    }

    /**
     * Render to the screen
     */
    draw() {
        ellipse(this.centerX, this.centerY, this.size, this.size);
    }
}