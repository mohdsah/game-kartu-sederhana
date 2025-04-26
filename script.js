// script.js

const cardsArray = [
    'kartu1.png', 'kartu2.jpeg', 'kartu3.png', 'kartu4.png', 'kartu5.jpg', 'kartu6.jpg',
    'kartu1.png', 'kartu2.jpeg', 'kartu3.png', 'kartu4.png', 'kartu5.jpg', 'kartu6.jpg'
];

// Shuffle cards
cardsArray.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById('game-board');

let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Create cards
cardsArray.forEach(imgName => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = `assets/${imgName}`;

    card.appendChild(img);
    card.addEventListener('click', flipCard);

    gameBoard.appendChild(card);
});

function flipCard() {
    if (lockBoard || this.classList.contains('flipped')) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.querySelector('img').src === secondCard.querySelector('img').src;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
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