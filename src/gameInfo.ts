import { board } from './board';

const gameModal = document.querySelector('.modal-wrapper');

export type speedType = 'fast' | 'medium' | 'slow';

export type levelType = 3 | 5 | 8 | 10 | 15;

export class GameInfo {
    private level: levelType = 5;
    private moves = 0;
    private roundsPlayed = 0;
    private speed = 1000;
    private movesElement;
    private levelElement;
    private roundsPlayedElement;
    private speedButtons;

    constructor() {
        const movesElement = document.getElementById('moves') as HTMLDivElement;
        const levelElement = document.getElementById('level') as HTMLDivElement;
        const roundsPlayedElement = document.getElementById(
            'rounds-played',
        ) as HTMLDivElement;
        const speedButtons = document.querySelectorAll<HTMLButtonElement>(
            '.game-table__button',
        );

        this.movesElement = movesElement;
        this.levelElement = levelElement;
        this.roundsPlayedElement = roundsPlayedElement;
        this.speedButtons = speedButtons;

        speedButtons.forEach((button) =>
            button.addEventListener('click', () =>
                this.changeSpeed(button.value as speedType, button),
            ),
        );
    }

    changeSpeed(speed: speedType, element: HTMLButtonElement) {
        if (element.classList.contains('game-table__button--active')) return;
        this.speedButtons.forEach((button) =>
            button.classList.remove('game-table__button--active'),
        );
        element.classList.add('game-table__button--active');

        if (speed === 'fast') return (this.speed = 500);
        if (speed === 'slow') return (this.speed = 3000);
        return (this.speed = 1000);
    }

    getSpeed() {
        return this.speed;
    }

    getLevel() {
        return this.level;
    }

    makeMove() {
        this.moves++;
        this.renderInfo();
    }

    renderInfo() {
        this.movesElement.textContent = this.moves.toString();
        this.levelElement.textContent = this.level.toString();
        this.roundsPlayedElement.textContent = this.roundsPlayed.toString();
    }

    startGame() {
        this.moves = 0;
        gameModal?.classList.add('modal-wrapper--hidden');
        this.renderInfo();
        board.createBoard();
    }

    endGame() {
        this.roundsPlayed++;
        this.renderInfo();
        gameModal?.classList.remove('modal-wrapper--hidden');
    }
}

export const gameInfo = new GameInfo();
