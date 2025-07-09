import { FullCardDeck } from "./cardDeck.js";
import { Player } from "./player.js";

class GameofWar {    
    constructor() {
        this.cardDeck = new FullCardDeck;
        this.p1 =  new Player('p1');
        this.p2 =  new Player('p2');
        this.dealDeck;
    }

    getRandomCard = (deckLength) => {
        return Math.floor(Math.random() * deckLength);
    }

    // selecting 26 random cards to add to player1's deck and then assigning the rest to player 2's deck
    dealDeck = () => {
        console.log("dealing the deck");
        const dealDeck = this.cardDeck;
        while (dealDeck.length > 26) {
            let randomCardIndex = getRandomCard(dealDeck.length); 
            this.p1.playerCards.push(dealDeck[randomCardIndex]);
            dealDeck.splice(randomCardIndex,1);
            };
        this.p2.playerCards = [...dealDeck]
    }

    playGame = () => {
        // game play 

        const p1Cards = this.p1.playerCards;
        const p2Cards = this.p2.playerCards;
        
        while (p1Cards.length && p2Cards.length > 0) {
            let p1RandomCardIndex = getRandomCard(p1Cards.length); 
            let p2RandomCardIndex = getRandomCard(p2Cards.length);

            let p1Card = p1Cards[p1RandomCardIndex];
            let p2Card = p2Cards[p2RandomCardIndex];

            console.log(`Player 1's card is: ${p1Card.symbol} of ${p1Card.suit}.`);
            console.log(`Player 2's card is: ${p2Card.symbol} of ${p2Card.suit}.`);

            // check for a tie

            if (Math.max(p1Card.numberValue == p2Card.numberValue)) {
                console.log("There was a tie, no one gets a point.")
            } else {

                let winningCard = Math.max(p1Card.numberValue, p2Card.numberValue);
                console.log("winningCard: ", winningCard)

                if (Math.max(p1Card.numberValue > p2Card.numberValue)) {
                    this.p1.points.updatePoints(1);
                } else {
                    this.p2.points.updatePoints(1);
                }
            }

            this.p1.playerCards.splice(p1RandomCardIndex,1);
            this.p2.playerCards.splice(p2RandomCardIndex,1);
        }
};

        declareWinner = () => {
            const p1Points = this.p1.points;
            const p2Points = this.p2.points;
            if (Math.max(p1Points > p2Points)) {
                console.log (`${this.p1.name} is the winner with a total of ${p1Points} and Player 2 lost with a total of ${p2Points}.`)
            } else {
                console.log (`Player 2 is the winner with a total of ${p2Points} and Player 1 lost with a total of ${p1Points}.`)
            }
        }
}

const game = new GameofWar;
game.playGame;
game.declareWinner;