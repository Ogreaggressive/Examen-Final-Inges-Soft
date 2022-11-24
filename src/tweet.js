let tweetList = []


function returnTweet(texto) {
  tweetList.push(texto)
  return tweetList;
}

function returnStringText() 
{
  let tweetString
  for(let i = 0; i<tweetList.length; i++)
  {
    tweetString = tweetList[i]
  }
  return tweetString;
}

function restartTweetList() 
{
  tweetList = []
  return tweetList
}


export {returnTweet, returnStringText, restartTweetList};
