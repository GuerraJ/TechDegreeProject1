/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotez=[
  {
    saying: "do or do not. there is no try.",
    s0urce: "Yoda",
    year: "1980",
    citation: "(The Empire Strikes Back)"
  },
  {
    saying: "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.",
    s0urce: "Arianna Huffington"
  },
  {
    saying: "Goonies never say die",
    s0urce: "Michael 'Mikey' Walsh",
    year: "1985",
    citation: "(The Goonies)"
  },
  {
    saying: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough",
    s0urce: "Oprah Winfrey"
  },
  {
    saying: "Your future hasn't been written yet.  No one's has.  Your future is whatever you make it.  So make it a good one.",
    s0urce: "Doc Brown",
    year: "1985",
    citation: "(Back to the Future)"
  }
]

console.log(quotez);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

//var randNum = 0;
function getRandomQuote () {
  var store = Math.floor((Math.random()*(quotez.length))) 
  return (quotez[store]);
  //return Math.floor((Math.random()*(quotez.length)));
};
//console.log(getRandomQuote(quotez.length));
//randNum += getRandomQuote();
//console.log(randNum);
//console.log(quotez[randNum]);
console.log(getRandomQuote());




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote () {
  var selectQuote = getRandomQuote();
  var div = document.getElementById('quote-box');
    div.innerHTML = '<p class="saying">'+ quotez.saying + '</p>';
    //<p class="sOurce">(quotez.s0urce)<span class="citation">(quotez.citation)</span><span class="year">(quotez.year)</span></p>;

  return selectQuote;
  //format + quotez.saying;

};
console.log(printQuote());


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.