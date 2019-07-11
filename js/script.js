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
//created one array with quotes and log quotes to console//
var quotes = [
  "do or do not. there is no try.", 
  "get 'er done", 
  "Goonies never say die", 
  "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough",
  "Your future hasn't been written yet.  No one's has.  Your future is whatever you make it.  So make it a good one."
];
console.log (quotes);   

//created one arrary with sources and log sources to console//
var source = ["Yoda", "Larry, the Cable Guy", "Michael 'Mikey' Walsh", "Oprah Winfrey", "Doc Brown"];
console.log(source);

/*test code to create full quote with matching source

    var q1 = quotes[0] + " -- " + source[0];
    console.log (q1);
    var q2 = quotes[1] + " -- " + source[1];
    console.log (q2);
    var q3 = quotes[2] + " -- " + source[2];
    console.log (q3);
    var q4 = quotes[3] + " -- " + source[3];
    console.log (q4);
    var q5 = quotes[4] + " -- " + source[4];
    console.log (q5);
*/

//created an array that combines quote with matching source and log to console//
var randomQ = [quotes[0] + " -- " + source[0], quotes[1] + " -- " + source[1], quotes[2] + " -- " + source[2], quotes[3] + " -- " + source[3], quotes[4] + " -- " + source[4]];
console.log (randomQ[3]);

var quotez=[
  {
    saying: "do or do not. there is no try.",
    s0urce: "Yoda"
  },
  {
    saying: "get 'er done",
    s0urce: "Larry, the Cable Guy"
  },
  {
    saying: "Goonies never say die",
    s0urce: "Michael 'Mikey' Walsh"
  },
  {
    saying: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough",
    s0urce: "Oprah Winfrey"
  },
  {
    saying: "Your future hasn't been written yet.  No one's has.  Your future is whatever you make it.  So make it a good one.",
    s0urce: "Doc Brown"
  }
]

console.log(quotez);
console.log(quotez[4]);
/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

var randNum = 0;
function getRandomQuote () {
  return Math.floor((Math.random()*(quotez.length)));
};
//console.log(getRandomQuote(quotez.length));
randNum += getRandomQuote();
console.log(randNum);

console.log(quotez[randNum]);



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

};



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.