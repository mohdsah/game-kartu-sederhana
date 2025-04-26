const cardImages = [
  'assets/kartu1.png',
  'assets/kartu2.png',
  'assets/kartu3.png',
  'assets/kartu4.png',
  'assets/kartu5.png',
  'assets/kartu6.png'
];

let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffleCards() {
  cards = [...cardImages, ...cardImages];
  cards.sort(() => 0.5 - Math.random());
}

function createBoard() {
  const board = document.getElementById('game-board');
  board.innerHTML = '';

  cards.forEach((image, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.image = image;

    const img = document.createElement('img');
    img.src = image;

    card.appendChild(img);
    card.addEventListener('click', flipCard);

    board.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  checkMatch();
}

function checkMatch() {
  const isMatch = firstCard.dataset.image === secondCard.dataset.image;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

document.getElementById('restart-btn').addEventListener('click', () => {
  shuffleCards();
  createBoard();
  document.getElementById('message').textContent = '';
});

shuffleCards();
createBoard();
