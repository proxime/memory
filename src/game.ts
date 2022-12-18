import { gameInfo } from './gameInfo';

export const startButton = document.getElementById('start-button');
gameInfo.renderInfo();
startButton?.addEventListener('click', () => gameInfo.startGame());
