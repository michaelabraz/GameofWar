import { GameCard } from "./gameCard.js";

    // where would I put something like this const? normally I would put it outside of a function in functional programming
    const CARD_SUITS = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
    // list of card numbers 
    const CARD_SYMBOLS  = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];


export class FullCardDeck {
    constructor(cardSuits, cardSymbols) {
        this.cardSuits = cardSuits || CARD_SUITS;
        this.cardSymbols = cardSymbols || CARD_SYMBOLS;
        this.deck = [];
        this.makeDeck();
    }

    // this is the problem here : need to make the value go up with each suit/symbol combo card instead of just with each suit
    makeDeck = () => {
        this.cardSuits.forEach((suit) =>{
        // iterat => {  }thisthis.suit.suit,tthis.symbol,this.numberValueing over each suit in the suit list
            this.cardSymbols.forEach((symbol, index) => {
        // creating a new game card using suit, number, and assigning a value for game play so that even face cards have a value
            this.deck.push( new GameCard(suit,symbol,index+2))
        })
        })
    };

}