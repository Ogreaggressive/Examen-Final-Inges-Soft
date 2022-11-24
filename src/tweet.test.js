import {returnTweet, returnStringText, restartTweetList} from "./tweet.js";

describe("deja tweetear", () => {
  it("deberia mostrar el tweet", () => {
    let respArray = ["hola"]
    expect(returnTweet("hola")).toEqual(respArray);
  });
  it("deberia mostrar otro tweet", () => {
    let respArray = ["hola", "hola"]
    expect(returnTweet("hola")).toEqual(respArray);
  });
});

describe("deberia borrar todos los tweets", () => {
  it("deberia mostrar lista vacia", () => {
    let respArray = []
    expect(restartTweetList()).toEqual(respArray);
  });
});

describe("muestra lista de tweets como string", () => {
  it("deberia mostrar lista de tweets", () => {
    let respArray = returnTweet("hola")
    expect(returnStringText()).toEqual("tweets: hola");
  });
  it("deberia mostrar mas tweets", () => {
    let respArray = returnTweet("que tal")
    expect(returnStringText()).toEqual("tweets: hola, que tal");
  });
});

