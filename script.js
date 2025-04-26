const cards = ["kartu1.png", "kartu2.png", "kartu3.png", "kartu4.png", "kartu5.png", "kartu6.png", "kartu7.png"];
const gameBoard = document.getElementById('gameBoard');

function createBoard() {
    for (let i = 0; i < cards.length * 2; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = 'assets/' + cards[i % cards.length];
        card.appendChild(img);
        gameBoard.appendChild(card);
    }
}

createBoard();