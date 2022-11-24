let tweetList = []


function returnTweet(texto) {
  tweetList.push(texto)
  return tweetList;
}

function returnStringText() 
{
  let tweetString = "tweets: "
  for(let i = 0; i<tweetList.length; i++)
  {
    tweetString += tweetList[i]
    if(i<tweetList.length -1)
    {
      tweetString += ", "
    }
  }
  return tweetString;
}

function restartTweetList() 
{
  tweetList = []
  return tweetList
}


export {returnTweet, returnStringText, restartTweetList};
