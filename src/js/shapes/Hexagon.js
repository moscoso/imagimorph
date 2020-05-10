class Hexagon extends Circle {


    draw() {
        this.size += this.growthSpeed;
        push();
        translate(width / 2, height / 2);
        polygon(0, 0, this.size, 6);
        pop();
    }
}