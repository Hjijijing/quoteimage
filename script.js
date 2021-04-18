import getQuote from "./getquote.js";
import getRandomImage from "./getrandomimage.js";

let quoteBodyElement = document.getElementById("quoteBody");
let quoteAuthorElement = document.getElementById("quoteAuthor");
let quoteImageElement = document.getElementById("quoteImage");

async function getNewQuote(params) {
  let quoteObject = await getQuote(params);
  quoteBodyElement.innerHTML = quoteObject.content;
  quoteAuthorElement.innerHTML = quoteObject.author;
}

async function getNewRandomImage(width, height) {
  let imageObject = await getRandomImage({ width, height });
  quoteImageElement.src = imageObject.url;
}

getNewQuote({ maxLength: "200" });
getNewRandomImage(1280, 720);
