import {returnTweet, returnStringText, restartTweetList, addTweet} from "./tweet.js";

const tweet = document.querySelector("#tweet");
const tweetear = document.querySelector("#tweetear");
const resultadoTweet = document.querySelector("#resultadoTweet");
const form = document.querySelector("#sumar-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(tweet.innerHTML)
  addTweet(tweet.innerHTML)

  resultadoTweet.innerHTML = returnStringText();
});