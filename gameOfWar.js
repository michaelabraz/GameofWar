import { FullCardDeck } from "./cardDeck.js";
import { Player } from "./player.js";


class GameofWar {
    constructor() {
        this.p1 = new Player('Player 1');
        this.p2 = new Player('Player 2');
        this.gameDeck = new FullCardDeck;
    }


    getRandomCard = (deckLength) => {
        return Math.floor(Math.random() * deckLength);
    }

// selecting 26 random cards to add to this.p1's deck
    dealCards = () => {
        console.log('Dealing the Deck.');
        let dealDeck = this.gameDeck.deck;
        while (dealDeck.length > 26) {
        let randomCardIndex = this.getRandomCard(dealDeck.length); 
        this.p1.playerCards.push({...dealDeck[randomCardIndex], playerOwner: 'Player 1'} );
        dealDeck.splice(randomCardIndex,1);
        };
        this.p2.playerCards = dealDeck.map(card => {return {...card, playerOwner: 'Player 2'}});
        console.log('p2Cards: ', JSON.stringify(this.p2.playerCards));
    };

    playGame = () => {
        console.log('Beginning the Game.')
        let p1Cards = this.p1.playerCards;
        let p2Cards = this.p2.playerCards;
        while (p1Cards.length && p2Cards.length > 0) {
    this.p1RandomCardIndex = this.getRandomCard(p1Cards.length); 
    this.p2RandomCardIndex = this.getRandomCard(p2Cards.length);
    let p1Card = p1Cards[this.p1RandomCardIndex];
    let p2Card = p2Cards[this.p2RandomCardIndex];

    let cardsPlayedStatement = `${this.p1.name}'s card is: ${p1Card.symbol} of ${p1Card.suit}.\n${this.p2.name}'s card is: ${p2Card.symbol} of ${p2Card.suit}.`;

    // check for a tie

    if (Math.max(p1Card.numberValue == p2Card.numberValue)) {
        console.log(`${cardsPlayedStatement}. \nThere was a tie, no one gets a point.`)
    } else {
        // console.log(`p1Card: ${JSON.stringify(p1Card)}, p2Card: ${JSON.stringify(p2Card)}`);
        let winningCard = p1Card.numberValue > p2Card.numberValue ? p1Card : p2Card;
        console.log(`${cardsPlayedStatement} \n${winningCard.playerOwner} wins with the battle ${winningCard.symbol} of ${winningCard.suit}.`)

        if (Math.max(p1Card.numberValue > p2Card.numberValue)) {
            this.p1.points++;
        } else {
            this.p2.points++;
        }
    }

    this.p1.playerCards.splice(this.p1RandomCardIndex,1);
    this.p2.playerCards.splice(this.p2RandomCardIndex,1);
};

// this statement will be printed at the end of the game regardless of winner
let pointStatement = `${this.p1.name} has ${this.p1.points} points and ${this.p2.name} has ${this.p2.points} points.`

// check for tie
console.log(pointStatement);
if (this.p1.points == this.p2.points) {
    console.log(`${pointStatement} Evenly matched with a tie. Peace is restored.`)
} 
// if no tie check who the winner is
else if (this.p1.points > this.p2.points) {
        console.log(`${pointStatement} ${this.p1.name} wins the war!`)
    }
else { console.log(`${pointStatement} ${this.p2.name} wins the war!`)}
}

};

const game = new GameofWar();
console.log("🗡️ Welcome to the Game of War 🗡️" );
game.dealCards();
game.playGame();
console.log(game);