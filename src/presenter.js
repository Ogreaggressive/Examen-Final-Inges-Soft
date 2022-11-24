import {returnTweet, returnStringText, restartTweetList, addTweet} from "./tweet.js";

let cad = document.querySelector("#cadena");
const button = document.querySelector("#addButton");

const res = document.querySelector("#resultado");


button.addEventListener("click", (event) => {
  event.preventDefault();
  
  addTweet(cad.value)
  res.innerHTML = returnStringText()
});
