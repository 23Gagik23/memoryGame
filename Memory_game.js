const gameContainer = document.getElementById('gameContainer');
const backMenu = document.getElementById('back-to-menu-button');
const images = [
    'Images/haori.png',
    'Images/yen.png',
    'Images/bamboo.png',
    'Images/wave.png',
    'Images/carp.png',
    'Images/cherry-blossom.png',
    'Images/fan.png',
    'Images/ghost.png',
    'Images/japan.png',
    'Images/fuji.png',
    'Images/kokeshi.png',
    'Images/lantern.png',
    'Images/matcha.png',
    'Images/fuji.png',
    'Images/money.png',
    'Images/origami.png',
    'Images/samurai.png',
    'Images/torii-gate.png',
    'Images/haori.png',
    'Images/yen.png',
    'Images/bamboo.png',
    'Images/wave.png',
    'Images/carp.png',
    'Images/cherry-blossom.png',
    'Images/fan.png',
    'Images/ghost.png',
    'Images/japan.png',
    'Images/restaurant.png',
    'Images/kokeshi.png',
    'Images/lantern.png',
    'Images/matcha.png',
    'Images/restaurant.png',
    'Images/money.png',
    'Images/origami.png',
    'Images/samurai.png',
    'Images/torii-gate.png',
]; 

let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;
let matchCount = 0;
let turnCount = 0;




document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const boxSize = urlParams.get('boxSize');

    if (!boxSize || isNaN(boxSize) || boxSize < 4 || boxSize > 6 || boxSize == 5 ) {
        alert('Box size not set or invalid. Redirecting to the start page.');
        window.location.href = '../index.html'; // Adjust the path to your start page
       
        return;
    
    }

    const size = parseInt(boxSize);
    const totalBoxes = size * size;
    if(totalBoxes === 16){

        gameContainer.style.width = '350px'
        gameContainer.style.marginLeft = '100px'
        gameContainer.style.marginRight = '100px'
    }

    // Shuffle and select images
    const shuffledImages = images.sort(() => 0.5 - Math.random()).slice(0, totalBoxes / 2);
    const gameImages = [...shuffledImages, ...shuffledImages].sort(() => 0.5 - Math.random());

    gameContainer.innerHTML = ''; // Clear the container before adding boxes

    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.innerHTML = `
            <div class="flipper">
                <div class="front"></div>
                <div class="back">
                    <img src="${gameImages[i]}" alt="Back Flipped Image">
                </div>
            </div>
        `;
        gameContainer.appendChild(box);
    }

    initializeGame();
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initializeGame() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('click', flipCard));
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    turnCount++;
    document.querySelector('.Turns').textContent = `Turns: ${turnCount}`;

    checkForMatch();
}

function checkForMatch() {
    const firstImage = firstCard.querySelector('img').src;
    const secondImage = secondCard.querySelector('img').src;
    const isMatch = firstImage === secondImage;
    isMatch ? disableCards() : unflipCards();
    

}

function disableCards() {
    setTimeout(() => {
        firstCard.querySelector('.back').style.visibility = 'hidden';
        secondCard.querySelector('.back').style.visibility = 'hidden';
        matchCount++;
        document.querySelector('.Matches').textContent = `Matches: ${matchCount}`;
        resetBoard();
    }, 1000);
}


function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard()

    }, 650)};


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

backMenu.addEventListener('click', function() {
    window.location.href = 'start.html'; // Adjust the path to your start page
});

document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.getElementById('rain-container');
    const numberOfDrops = 100;

    for (let i = 0; i < numberOfDrops; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
        raindrop.style.animationDelay = `${Math.random() * 2}s`;

        rainContainer.appendChild(raindrop);
    }
});
