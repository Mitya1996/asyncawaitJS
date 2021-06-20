// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
async function getDeckAndDraw1() {
    //get new deck
    let data = await $.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    let deck_id = data.deck_id;

    //draw one card
    let data2 = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
    let value = data2.cards[0].value;
    let suit = data2.cards[0].suit;

    console.log(`${value} of ${suit}`)
}
getDeckAndDraw1();

// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.

// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

