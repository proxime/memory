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
    private modalspeedButtons;
    private modalLevelButtons;

    constructor() {
        const movesElement = document.getElementById('moves') as HTMLDivElement;
        const levelElement = document.getElementById('level') as HTMLDivElement;
        const roundsPlayedElement = document.getElementById(
            'rounds-played',
        ) as HTMLDivElement;
        const speedButtons = document.querySelectorAll<HTMLButtonElement>(
            '.game-table__button',
        );
        const modalspeedButtons = document.querySelectorAll<HTMLButtonElement>(
            '.modal__speed-button',
        );
        const modalLevelButtons = document.querySelectorAll<HTMLButtonElement>(
            '.modal__level-button',
        );

        this.movesElement = movesElement;
        this.levelElement = levelElement;
        this.roundsPlayedElement = roundsPlayedElement;
        this.speedButtons = speedButtons;
        this.modalspeedButtons = modalspeedButtons;
        this.modalLevelButtons = modalLevelButtons;

        [...modalspeedButtons, ...speedButtons].forEach((button) =>
            button.addEventListener('click', () =>
                this.changeSpeed(button.value as speedType, button),
            ),
        );
        modalLevelButtons.forEach((button) =>
            button.addEventListener('click', () =>
                this.changeLevel(Number(button.value) as levelType, button),
            ),
        );
    }

    changeSpeed(speed: speedType, element: HTMLButtonElement) {
        if (element.classList.contains('modal__settings-button--active'))
            return;
        this.modalspeedButtons.forEach((button) =>
            button.classList.remove('modal__settings-button--active'),
        );
        [...this.modalspeedButtons]
            .find((button) => button.value === speed)
            ?.classList.add('modal__settings-button--active');

        if (element.classList.contains('game-table__button--active')) return;
        this.speedButtons.forEach((button) =>
            button.classList.remove('game-table__button--active'),
        );
        [...this.speedButtons]
            .find((button) => button.value === speed)
            ?.classList.add('game-table__button--active');

        if (speed === 'fast') return (this.speed = 500);
        if (speed === 'slow') return (this.speed = 3000);
        return (this.speed = 1000);
    }

    changeLevel(level: levelType, element: HTMLButtonElement) {
        if (element.classList.contains('modal__settings-button--active'))
            return;
        this.modalLevelButtons.forEach((button) =>
            button.classList.remove('modal__settings-button--active'),
        );
        element.classList.add('modal__settings-button--active');

        this.level = level;
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
