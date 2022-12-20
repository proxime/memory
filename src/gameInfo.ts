import { board } from './board';

const gameModal = document.querySelector('.modal-wrapper');

export type speedType = 'fast' | 'medium' | 'slow';

export class GameInfo {
    static levels = [
        {
            value: 0,
            name: '3x2',
            pairs: 3,
        },
        {
            value: 1,
            name: '4x3',
            pairs: 6,
        },
        {
            value: 2,
            name: '4x4',
            pairs: 8,
        },
        {
            value: 3,
            name: '5x4',
            pairs: 10,
        },
        {
            value: 4,
            name: '6x4',
            pairs: 12,
        },
        {
            value: 5,
            name: '6x5',
            pairs: 15,
        },
    ];

    private level = 1;
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
                this.changeLevel(Number(button.value), button),
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

    changeLevel(level: number, element: HTMLButtonElement) {
        if (level === this.level) return;

        this.level = level;
        this.modalLevelButtons.forEach((button) =>
            button.classList.remove('modal__settings-button--active'),
        );
        element.classList.add('modal__settings-button--active');
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
        this.levelElement.textContent = GameInfo.levels[this.level]?.name;
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
