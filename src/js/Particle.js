// A simple Particle class
class Particle {

    position;
    velocity;
    acceleration = createVector(0, 0);
    lifespan = 255;
    image;

    constructor(position) {
        const level = amplitude.getLevel() * 100;
        const randomX = random(-1 * level, 1 * level);
        const randomY = random(-1 * level, 1 * level);
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(randomX, randomY);
        this.position = position.copy();
        this.iconType = Math.floor(random(0, 3));
        if (randomX === 0) {
            this.lifespan = 0;
        }
    }

    /**
     * Set the image of the particle
     * @param image 
     */
    setImage(image) {
        this.image = image;
    }

    /**
     * Update and display the particle.
     */
    run() {
        this.update();
        this.display();
    }
    /**
     * Method to update the position of the particle with very simple physics
     */
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 3;
    }
    
    /**
     * Display the Particle by rendering it with P5 draw functions.
     */
    display() {
        stroke(200, this.lifespan);
        strokeWeight(2);
        fill(127, this.lifespan);
        if (this.image) {
            image(this.image, this.position.x, this.posity.y, 100, 100);
        } else {
            ellipse(this.position.x, this.position.y, 12, 12);
            tint(255, this.lifespan);
        }
    }

    /**
     * A check to see whether the particle is still alive. Each particle dies when it's lifespan run outs.
     */
    isDead() {
        return this.lifespan < 0;
    }
}
