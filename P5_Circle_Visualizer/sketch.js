const width = 400;
const height = 400;
const shapes = [];

const SPAWN_SIZE = 50;
const CIRCUMSCRIBED_DIAMETER = width * Math.sqrt(2);

class Circle {

	constructor() {
		this.centerX = width / 2;
		this.centerY = height / 2;
		this.size = 0;
		this.growthSpeed = 1;
	}
	
	draw() {
			this.size += this.growthSpeed;			
			ellipse(this.centerX, this.centerY, this.size, this.size);
	}	
}

function setup() {
	createCanvas(width, height);
	createCircle();
}

function draw() {
	background(220, 0, 100);
	noFill();
	for(const circle of shapes) {
		if(circle.size > CIRCUMSCRIBED_DIAMETER){
			array.shift(1);
		}
		circle.draw();
	}
	const lastCircle = shapes[shapes.length - 1];
	if(lastCircle.size == SPAWN_SIZE){
		createCircle();
	}
}

function createCircle(){
	const c = new Circle();
	shapes.push(c);
}
