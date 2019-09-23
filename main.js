const score = document.querySelector('.score'),
      start = document.querySelector('.start'),
      gameArea = document.querySelector('.gameArea'),
      car = document.createElement('div');

car.classList.add('car');


start.addEventListener('click', startGame);
document.addEventListener('keydown', startMove);
document.addEventListener('keyup', stopMove);

const keys = {
  arrowUp: false,
  arrowDown: false,
  arrowLeft: false,
  arrowRight: false
};

const settings = {
  start: false,
  score: 0,
  speed: 3
};

function startGame() {
  start.classList.add('hidden');
  settings.start = true;
  gameArea.appendChild(car);
  requestAnimationFrame(playGame);
}

function playGame() {
  if (settings.start) {
  requestAnimationFrame(playGame);
  }
}

function startMove(event) {
  event.preventDefault();
  keys[event.key] = true;
}

function stopMove(event) {
  event.preventDefault();
  keys[event.key] = false;
}