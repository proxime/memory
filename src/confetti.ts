import c, { Options } from 'canvas-confetti';

export class Confetti {
    private count = 400;
    private defaults: Options = {
        origin: { y: 0.7 },
        zIndex: 9999,
    };

    fire(particleRatio: number, opts: Options) {
        c(
            Object.assign({}, this.defaults, opts, {
                particleCount: Math.floor(this.count * particleRatio),
            }),
        );
    }

    play() {
        this.fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        this.fire(0.2, {
            spread: 60,
        });
        this.fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });
        this.fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });
        this.fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }
}

export const confetti = new Confetti();
