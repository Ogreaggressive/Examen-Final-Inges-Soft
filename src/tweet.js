let tweetList = []


function addTweet(texto)
{
  if(!texto.length == 0)
  {
    tweetList.push(texto)
  }
}

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


export {returnTweet, returnStringText, restartTweetList, addTweet};
