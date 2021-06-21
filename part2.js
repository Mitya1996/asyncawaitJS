// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
async function getDeckAndDraw1() {
    let data = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`);
    let {suit, value} = data.cards[0];
    console.log(`${value} of ${suit}`)
}
getDeckAndDraw1();

// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.
async function getDeckAndDraw2() {
    //two separate requests
    let firstCardData = await $.getJSON(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`);
    let deck_id = firstCardData.deck_id;
    let secondCardData = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
    [firstCardData, secondCardData].forEach(card => {
        let {value, suit} = card.cards[0];
        console.log(`${value} of ${suit}`);
    })
}
getDeckAndDraw2();


// Once you have both cards, console.log the values and suits of both cards.

// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';
    
    // 3.
    async function setup() {
      let $btn = $('button');
      let $cardArea = $('#card-area');
  
      let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
      $btn.show().on('click', async function() { 
        let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
        let cardSrc = cardData.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
          $('<img>', {
            src: cardSrc,
            css: {
              transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
            }
          })
        );
        if (cardData.remaining === 0) $btn.remove();
      });
    }
    setup();
  });
