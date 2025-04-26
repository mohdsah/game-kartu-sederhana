const cardsArray = [
  { name: 'kartu1', img: 'assets/kartu1.png' },
  { name: 'kartu2', img: 'assets/kartu2.png' },
  { name: 'kartu3', img: 'assets/kartu3.png' },
  { name: 'kartu4', img: 'assets/kartu4.png' },
  { name: 'kartu5', img: 'assets/kartu5.png' },
  { name: 'kartu6', img: 'assets/kartu6.png' }
];

let gameCards = [...cardsArray, ...cardsArray];

gameCards.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('game-board');
let firstCard = null;
let secondCard = null;
let lockBoard = false;

gameCards.forEach(card => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  
  cardElement.innerHTML = `
    <div class="card-inner">
      <div class="card-front">?</div>
      <div class="card-back">
        <img src="${card.img}" alt="${card.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    </div>
  `;

  cardElement.addEventListener('click', () => flipCard(cardElement, card));
  gameBoard.appendChild(cardElement);
});

function flipCard(cardElement, cardData) {
  if (lockBoard) return;
  if (cardElement.classList.contains('flipped')) return;

  cardElement.classList.add('flipped');

  if (!firstCard) {
    firstCard = { element: cardElement, data: cardData };
  } else {
    secondCard = { element: cardElement, data: cardData };
    checkMatch();
  }
}

function checkMatch() {
  if (firstCard.data.name === secondCard.data.name) {
    firstCard = null;
    secondCard = null;
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.element.classList.remove('flipped');
      secondCard.element.classList.remove('flipped');
      firstCard = null;
      secondCard = null;
      lockBoard = false;
    }, 1000);
  }
}
