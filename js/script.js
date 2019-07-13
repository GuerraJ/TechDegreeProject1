/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//created array of quotes objects with console log to display//
const quotes=[
  {
    quote: "do or do not. there is no try.",
    source: "Yoda",
    year: "1980",
    citation: "The Empire Strikes Back"
  },
  {
    quote: "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.",
    source: "Arianna Huffington",
    tag: "business | boss lady"
  },
  {
    quote: "Goonies never say die.",
    source: "Michael 'Mikey' Walsh",
    citation: "The Goonies",
    year: "1985"
  },
  {
    quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    source: "Oprah Winfrey",
    tag: "boss lady"
  },
  {
    quote: "Your future hasn't been written yet.  No one's has.  Your future is whatever you make it.  So make it a good one.",
    source: "Doc Brown",
    year: "1985",
    citation: "Back to the Future"
  }
]
console.log(quotes);

//Created the `getRandomQuote` function to create a variable to store a random number to be used to pull and return from `quotes` array index.//
function getRandomQuote () {
  let store = Math.floor((Math.random()*(quotes.length))) 
  return (quotes[store]);
};

/***
  Created `printQuote` function to call 'getRandomQuote' from above. 
  Created 'format' variable to build the HTML string to display/format quote, source for all and citation and/or year, where applicable  
  Created 'changebackground' function to change background with each random quote display.
  ***/

function printQuote () {
  let selectQuote = getRandomQuote();
  let format = '';
  format += '<p class="quote">'+ selectQuote.quote + '</p>';
  format += '<p class="source">'+ selectQuote.source; 
    if (selectQuote.citation !== undefined) {
     format += '<span class="citation">'+ (selectQuote.citation) + '</span>';
    };
    if (selectQuote.year !== undefined) {
    format += '<span class="year">' + selectQuote.year + '</span>' 
    };
    if (selectQuote.tag !== undefined) {
      format += '<span class="year">'+ selectQuote.tag + '</span>' 
      };
  format += '</p';
  document.getElementById('quote-box').innerHTML = format;
    
  changeBackground();
  function changeBackground() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
  };
  changeBackground();
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//added 20 second timer to change quote if button is not clicked
var intervalID = window.setInterval(printQuote, 20000);