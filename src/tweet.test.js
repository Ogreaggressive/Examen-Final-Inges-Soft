import {returnTweet} from "./tweet.js";

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
