import {returnTweet} from "./tweet.js";

describe("deja tweetear", () => {
  it("deberia mostrar el tweet", () => {
    expect(returnTweet("hola")).toEqual("hola");
  });
});
