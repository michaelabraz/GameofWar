import { GameCard } from "./gameCard.js";

    // where would I put something like this const? normally I would put it outside of a function in functional programming
    const CARD_SUITS = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
    // list of card numbers 
    const CARD_SYMBOLS  = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];


export class FullCardDeck {
    constructor(deck) {
        this.deck = deck || [];
    }

    makeDeck = (cardSuits, cardSymbols) => {
        CARD_SYMBOLS.forEach((symbol,index) =>{
        // iterating over each suit in the suit list
            CARD_SUITS.forEach(suit => 
        // creating a new game card using suit, number, and assigning a value for game play so that even face cards have a value
            this.deck.push( new GameCard(suit,symbol,index + 2))
            )
        })
    };


}