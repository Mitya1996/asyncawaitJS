let baseURL = "http://numbersapi.com/";


// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.
async function favNumber() {
    let data = await $.getJSON(`${baseURL}5?json`);
    console.log(data.text);
} 
favNumber();


// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
async function multiple() {

    let data = await Promise.all([
        $.getJSON(`${baseURL}7?json`),
        $.getJSON(`${baseURL}8?json`),
        $.getJSON(`${baseURL}9?json`)
    ]);

    console.log(data[0].text, data[1].text, data[2].text);
}
multiple();


// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.
async function fav4() {

    let promises = [];
    for(let i=0; i<4; i++) {
        promises.push($.getJSON(`${baseURL}5?json`))
    }
    let data = await Promise.all(promises);

    data.forEach(e => {
        console.log(e.text);
    })
}
fav4();
