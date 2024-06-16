const width = screen.width / 3;
const height = screen.height / 3;
const centerX = width / 2;
const centerY = height / 2;
const shapes = [];

const SPAWN_SIZE = 50;
const CIRCUMSCRIBED_DIAMETER = width * Math.sqrt(2);

class Circle {

    constructor() {
        this.centerX = width / 2;
        this.centerY = height / 2;
        this.size = 0;
        this.growthSpeed = 1.5;
    }

    draw() {
        this.size += this.growthSpeed;
        ellipse(this.centerX, this.centerY, this.size, this.size);
    }
}

class Arc extends Circle {
    constructor() {
        super();
        this.arcWidth = 140;
    }

    draw() {
        this.size += this.growthSpeed;
        const arcStart = this.size % 360;
        const arcEnd = (this.size + this.arcWidth) % 360;
        angleMode(degrees);
        arc(this.centerX, this.centerY, this.size, this.size, arcEnd, arcStart);
    }
}

class Hexagon extends Circle {
    draw() {
        this.size += this.growthSpeed;
        push();
        translate(width / 2, height / 2);
        polygon(0, 0, this.size, 6);
        pop();
    }
}

class SpinningHexagon extends Circle {
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

function setup() {
    createCanvas(width, height);
    angleMode(DEGREES);
    createShape();
}

function draw() {
    background(220, 0, 100);
    noFill();
    for (const shape of shapes) {
        if (shape.size > CIRCUMSCRIBED_DIAMETER) {
            shapes.shift(1);
        }
        shape.draw();
    }
    const lastShape = shapes[shapes.length - 1];
    if (lastShape && lastShape.size >= SPAWN_SIZE) {
        createShape();
    }
    drawSpinningSpiral(1, 2, Math.min(3000, frameCount), frameCount / 3);
}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    angleMode(RADIANS);
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a) * radius;
        var sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function createShape() {
    createSpinningHexagon();
}

function drawSpiral(a, b, spins) {

    let x = centerX,
        y = centerY;
    for (i = 0; i < spins; i++) {
        angle = 0.1 * i;
        x2 = centerX + (a + b * angle) * Math.cos(angle);
        y2 = centerY + (a + b * angle) * Math.sin(angle);
        line(x, y, x2, y2);
        x = x2;
        y = y2;
    }
}

function drawSpinningSpiral(a, b, spins, offset) {

    let x = centerX,
        y = centerY;
    for (i = 0; i < spins; i++) {
        angle = 0.1 * i;
        x2 = centerX + (a + b * angle) * Math.cos(angle + offset * PI / 3)
        y2 = centerY + (a + b * angle) * Math.sin(angle + offset * PI / 2);
        line(x, y, x2, y2);
        x = x2;
        y = y2;
    }
}

function toRadians(angleInDegrees) {
    return angleInDegrees * (Math.PI / 180);
}

function createCircle() {
    const c = new Circle();
    shapes.push(c);
}

function createArc() {
    const a = new Arc();
    shapes.push(a);
}


function createHexagon() {
    const h = new Hexagon();
    shapes.push(h);
}

function createSpinningHexagon() {
    const h = new SpinningHexagon();
    shapes.push(h);
}