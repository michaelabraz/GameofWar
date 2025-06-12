// card class 

class GameCard {
    constructor(suit, symbol, numberValue) {
        this.suit = suit;
        this.symbol = symbol;
        this.numberValue = numberValue;
    }
};

const getRandomCard = (deckLength) => {
        return Math.floor(Math.random() * deckLength);
}

// list of card suits
let cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
// list of card numbers 
let cardSymbols = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
// creating empty list to add all cards to
let deckOfCards = [];
// iterating through each item in the cardSymbols list
cardSymbols.forEach((symbol,index) =>{
    // iterating over each suit in the suit list
    cardSuits.forEach(suit => 
        // creating a new game card using suit, number, and assigning a value for game play so that even face cards have a value
        deckOfCards.push( new GameCard(suit,symbol,index + 2))
    )
});

// creating a deck to deal with 
let dealDeck = deckOfCards;
// creating a list for player 1
let player1 = [];
// creating a list for player 2
let player2 = [];

// selecting 26 random cards to add to player1's deck
while (dealDeck.length > 26) {
    let randomCardIndex = getRandomCard(dealDeck.length); 
    player1.push(dealDeck[randomCardIndex]);
    dealDeck.splice(randomCardIndex,1);
};

// assigning the rest of the cards to player2's deck

player2 = [...dealDeck];

// game play 

let p1Points = 0;
let p2Points = 0;

while (player1.length && player2.length > 0) {
    let p1RandomCardIndex = getRandomCard(player1.length); 
    let p2RandomCardIndex = getRandomCard(player2.length);

    let p1Card = player1[p1RandomCardIndex];
    let p2Card = player2[p2RandomCardIndex];

    console.log(`Player 1's card is: ${p1Card.symbol} of ${p1Card.suit}.`);
    console.log(`Player 2's card is: ${p2Card.symbol} of ${p2Card.suit}.`);

    // check for a tie

    if (Math.max(p1Card.numberValue == p2Card.numberValue)) {
        console.log("There was a tie, no one gets a point.")
    } else {

        let winningCard = Math.max(p1Card.numberValue, p2Card.numberValue);
        console.log("winningCard: ", winningCard)

        if (Math.max(p1Card.numberValue > p2Card.numberValue)) {
            p1Points++;
        } else {
            p2Points++;
        }
    }

    player1.splice(p1RandomCardIndex,1);
    player2.splice(p2RandomCardIndex,1);
    

};

if (Math.max(p1Points > p2Points)) {
    console.log (`Player 1 is the winner with a total of ${p1Points} and Player 2 lost with a total of ${p2Points}.`)
} else {
    console.log (`Player 2 is the winner with a total of ${p2Points} and Player 1 lost with a total of ${p1Points}.`)
};