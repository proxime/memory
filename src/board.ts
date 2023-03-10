import { confetti } from './confetti';
import { GameInfo, gameInfo } from './gameInfo';
import { getRandomInt } from './helpers/getRandomInt';
import { gameIcons } from './shared/gameIcons';

const audioGood = document.getElementById('audio-good') as HTMLAudioElement;
const audioBad = document.getElementById('audio-bad') as HTMLAudioElement;
const audioCongratulations = document.getElementById(
    'audio-congratulations',
) as HTMLAudioElement;

export type GameItemType = {
    completed: boolean;
    id: number;
    img: string;
    name: string;
};

export class Board {
    private board?: GameItemType[];
    private currentCardIndex?: number;
    private currentCardElement?: HTMLDivElement;
    private tourInProgress = false;
    private gameInProgress = false;
    private pairs = 1;

    createBoard() {
        this.gameInProgress = true;
        const level = gameInfo.getLevel();
        this.pairs = GameInfo.levels[level]?.pairs;
        if (!this.pairs) throw new Error('Invalid level');

        const gameItems = gameIcons
            .sort(() => Math.random() - Math.random())
            .slice(0, this.pairs);

        const board: GameItemType[] = [];
        for (let i = 0; i < this.pairs * 2; i++) {
            const setGameItem = (): GameItemType => {
                const imageIndex = getRandomInt(0, this.pairs - 1);
                const image = gameItems[imageIndex];
                if (
                    !(board.filter((item) => item.id === image.id).length > 1)
                ) {
                    return { ...gameItems[imageIndex], completed: false };
                }
                return setGameItem();
            };
            const gameItem = setGameItem();
            board[i] = gameItem;
        }

        this.board = board;
        this.renderBoard();
    }

    renderBoard() {
        if (!this.board) return;

        const boardElement = document.getElementById('board');
        if (!boardElement)
            throw new Error('element with id "board" does not exists');
        boardElement.innerHTML = '';
        boardElement.className = `board--${gameInfo.getLevel()}`;

        let index = 0;
        for (const value of this.board) {
            boardElement.innerHTML += `
                <div class="game-card" data-index="${index}">
                    <div class="game-card__inner">
                        <div class="game-card__front">
                            <img
                                src=${value.img}
                                alt=${value.name}
                                draggable="false"
                            />
                        </div>
                        <div class="game-card__back">
                            <div class="game-card__back-image" />
                        </div>
                    </div>
                </div>`;
            index++;
        }

        const cards = document.querySelectorAll<HTMLDivElement>('.game-card');
        cards.forEach((card) => {
            card.addEventListener('click', () =>
                board.handleCardClick(card, Number(card.dataset.index)),
            );
        });
    }

    async handleCardClick(element: HTMLDivElement, index: number) {
        if (
            !this.board ||
            this.tourInProgress ||
            index === this.currentCardIndex ||
            this.board[index].completed
        )
            return;

        this.tourInProgress = true;
        element.classList.add('game-card--active');

        // set first card
        if (this.currentCardIndex === undefined) {
            this.currentCardIndex = index;
            this.currentCardElement = element;
            this.tourInProgress = false;
            return;
        }

        const isValidCard =
            this.board[this.currentCardIndex].id === this.board[index].id;

        audioGood.currentTime = 0;
        audioGood.pause();
        audioBad.currentTime = 0;
        audioBad.pause();

        if (isValidCard) audioGood.play();
        else audioBad.play();

        await new Promise((resolve) =>
            setTimeout(() => {
                if (!this.board || this.currentCardIndex === undefined) return;

                // check if both cards are the same
                if (isValidCard) {
                    this.currentCardElement?.classList.remove(
                        'game-card--active',
                    );
                    this.currentCardElement?.classList.add(
                        'game-card--completed',
                    );
                    this.board[this.currentCardIndex].completed = true;

                    element.classList.remove('game-card--active');
                    element.classList.add('game-card--completed');
                    this.board[index].completed = true;
                } else {
                    this.currentCardElement?.classList.remove(
                        'game-card--active',
                    );
                    element.classList.remove('game-card--active');
                }

                resolve(undefined);
            }, gameInfo.getSpeed()),
        );

        this.currentCardElement = undefined;
        this.currentCardIndex = undefined;
        gameInfo.makeMove();
        this.checkGameStatus();
        this.tourInProgress = false;
    }

    checkGameStatus() {
        const completedCards = this.board?.filter((item) => item.completed);
        if (completedCards?.length === this.pairs * 2) {
            this.gameInProgress = false;
            this.board = [];
            audioCongratulations.play();
            confetti.play();
            gameInfo.endGame();
        }
    }

    getGameProgress() {
        return this.gameInProgress;
    }
}

export const board = new Board();
