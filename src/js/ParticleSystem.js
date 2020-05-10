/**
 * Used to create particles
 */
class ParticleSystem {

    /**
     * The center of the Particle system.
     */
    origin;


    /**
     * The list of particles in the system.
     */
    particles;

    /**
     * The maximum number of particles that the system can have at any given time
     */
    limit;

    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
        this.limit = 10;
    }
    /**
     * Add a particle to the particle system.
     */
    addParticle() {
        const level = amplitude.getLevel() * 10;
        this.limit = map(level, 0, 8, 10, 150);
        if (this.particles.length <= this.limit)
            this.particles.push(new Particle(this.origin));
    }

    /**
     * Run all the particles that are alive in the system.
     */
    run() {
        for (var i = this.particles.length - 1; i >= 0; i--) {
            var p = this.particles[i];
            p.run();
            if (p.isDead()) {
                this.particles.splice(i, 1);
            }
        }
    }
}



