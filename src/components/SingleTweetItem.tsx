import { useEffect } from "react"
import { Tweet } from "../pages/types";
import { SingleTweet } from "./SingleTweet";

type Props = {
    tweets: Tweet[];
    setTweets: (tweets: Tweet[]) => void;
}
export function SingleTweetItem({tweets, setTweets}: Props) {
    useEffect(() => {
        fetch('http://localhost:4000/tweets')
        .then(resp => resp.json())
        .then(tweetFromServer => setTweets(tweetFromServer))
    }, [])
    return(
    <div className="single-tweet-card">
        {tweets.map(tweet =>
            <SingleTweet key={tweet.id} tweet={tweet} /> )}
    </div>    
    )
}