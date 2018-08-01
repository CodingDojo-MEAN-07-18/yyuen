class Card{
    constructor(suit,string,number){
        this.suit = suit;
        this.string = string;
        this.number = number;
    }
    show(){
        console.log(`Suit:${this.suit} String value: ${this.string} Numberical value: ${this.number}`);
    }
}

class Deck{
    constructor(){
        var cards = ["Hearts","Diamonds","Spades","Clubs"];
        var values = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King']; 
    }
}