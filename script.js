const gameBoard = document.getElementById('gameBoard');

const images = [
    'assets/kartu1.png',
    'assets/kartu2.png',
    'assets/kartu3.png',
    'assets/kartu4.png',
    'assets/kartu5.png',
    'assets/kartu6.png',
    'assets/kartu7.png'
];

let cards = [...images, ...images]; // duplicate untuk matching
let firstCard, secondCard;
let lockBoard = false;

// Shuffle cards
cards.sort(() => 0.5 - Math.random());

cards.forEach(src => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img src="${src}" alt="card image">`;
    gameBoard.appendChild(card);

    card.addEventListener('click', () => {
        if (lockBoard || card.classList.contains('flipped')) return;

        card.classList.add('flipped');

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            checkMatch();
        }
    });
});

function checkMatch() {
    const isMatch = firstCard.innerHTML === secondCard.innerHTML;

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