// declaring DOM variables
let player1Deck = document.querySelector('.player1Deck');
let player1CardsWon = document.querySelector('.player1CardsWon');
let player1Cards = document.querySelector('.player1Cards');
let player2Deck = document.querySelector('.player2Deck');
let player2CardsWon = document.querySelector('.player2CardsWon');
let player2Cards = document.querySelector('.player2Cards');
let cardHolder1 = document.querySelector('.cardHolder1');
let cardHolder2 = document.querySelector('.cardHolder2');
let startTheGame = document.querySelector('.start-game');
let draw = document.querySelector('.draw');
let winnerText = document.querySelector('.text');
let cards1 = document.querySelector('.cards1');
let cards2 = document.querySelector('.cards2');

// creating suits and ranks
const cardAttributes = {
    suits: ['♣', '♦', '♥', '♠'],
    ranks: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
}

// creating empty deck array
const deck = [];

// start game event listener
startTheGame.addEventListener('click', () => {
    startGame();
}, { once: true });

// starting the game function
function startGame() {
    newDeck();
    shuffle();
    deckSplit();
    return;
}

// creating new deck function 
function newDeck() {
    cardAttributes.suits.forEach((suit) => {
        cardAttributes.ranks.forEach((rank, i) => {
            const card = {
                suit: suit,
                rank: rank,
                cardRank: i + 2,
            }
            deck.push(card);
        })
    })
}

// shuffle the deck
function shuffle() {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let random = deck[i];
        deck[i] = deck[j];
        deck[j] = random;
    }
}

// split the deck between player1 and player 2
function deckSplit() {
    const deckSplit = Math.ceil(deck.length / 2);
    player1Deck = deck.slice(0, deckSplit);
    player2Deck = deck.slice(deckSplit, deck.length);
}

// declaring i outside the function to make it work
let i = 0;

// flipping over the first card of each player
function playerFlip() {
    if (i < player1Deck.length && player2Deck.length) {
        cards1.classList.add('cardHolder1');
        cards1.innerText = `${player1Deck[0].rank} ${player1Deck[0].suit}`;
        cards2.innerText = `${player2Deck[0].rank} ${player2Deck[0].suit}`;
        cards2.classList.add('cardHolder2');
        player1CardsWon.innerText = `Cards: ${player1Deck.length}`;
        player2CardsWon.innerText = `Cards: ${player2Deck.length}`;
        compareCards();
    }
}

// drawing cards and calling the function above
draw.addEventListener('click', playerFlip);

let cardArray = [];

// comparing cards to see which one wins that round or to start a war
function compareCards() {
    if (player1Deck[0].cardRank == player2Deck[0].cardRank) {
        winnerText.innerText = 'War!!!!!';
        if (player1Deck[4].cardRank > player2Deck[4].cardRank) {
            player1Deck.push(player1Deck[0]);
            player1Deck.push(player2Deck[0]);
            player1Deck.push(player1Deck[1]);
            player1Deck.push(player2Deck[1]);
            player1Deck.push(player1Deck[2]);
            player1Deck.push(player2Deck[2]);
            player1Deck.push(player1Deck[3]);
            player1Deck.push(player2Deck[3]);
            player1Deck.push(player1Deck[4]);
            player1Deck.push(player2Deck[4]);
            player1Deck.splice(0, 5);
            player2Deck.splice(0, 5);
        }
        else if (player2Deck[4].cardRank > player1Deck[4].cardRank) {
            player2Deck.push(player1Deck[0]);
            player2Deck.push(player2Deck[0]);
            player2Deck.push(player1Deck[1]);
            player2Deck.push(player2Deck[1]);
            player2Deck.push(player1Deck[2]);
            player2Deck.push(player2Deck[2]);
            player2Deck.push(player1Deck[3]);
            player2Deck.push(player2Deck[3]);
            player2Deck.push(player1Deck[4]);
            player2Deck.push(player2Deck[4]);
            player1Deck.splice(0, 5);
            player2Deck.splice(0, 5);
        }
    }
    else if (player1Deck[0].cardRank > player2Deck[0].cardRank) {
        player1Deck.push(player1Deck[0]);
        player1Deck.push(player2Deck[0]);
        player1Deck.splice(0, 1);
        player2Deck.splice(0, 1);
        winnerText.innerText = 'Player 1 wins!';
    }
    else if (player2Deck[0].cardRank > player1Deck[0].cardRank) {
        player2Deck.push(player1Deck[0]);
        player2Deck.push(player2Deck[0]);
        player1Deck.splice(0, 1);
        player2Deck.splice(0, 1);
        winnerText.innerText = 'Player 2 wins!';
    }
    else return;
}

function winner() {
    
}