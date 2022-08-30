class Tweet {
  constructor(handle, tweetText, link){
    this.sender = handle;
    this.content = tweetText;
    if (link === undefined) {
      this.link = "no link provided"
    } else {
    this.link = link
    }
    this.likes = 0
    this.retweets = 0
    this.replies = []
    this.replyCount = 0
  }
  like(){
    this.likes++
  }
  retweet(){
    this.retweets++
  }
  reply(replyText){
    this.replies.push(replyText)
    this.replyCount++
  }
}

module.exports = Tweet;
