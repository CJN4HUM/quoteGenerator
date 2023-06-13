var quotes = [
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Elanor Roosevelt"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "Margaret Mead"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  }
];

function generateQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  document.getElementById("quote").textContent = randomQuote.quote;
  document.getElementById("author").textContent = "- " + randomQuote.author;
}

document.getElementById("generate-btn").addEventListener("click", generateQuote);
