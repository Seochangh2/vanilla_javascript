const quotes = [
  {
    quote: "나는 바보입니다.",
    author: "박해주",
  },
  {
    quote: "멍멍",
    author: "개밤톨",
  },
  {
    quote: "헥헥",
    author: "김형국",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const mainQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = mainQuote.quote;
author.innerText = mainQuote.author;
