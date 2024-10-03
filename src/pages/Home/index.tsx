import { FormEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Tweet } from "../../components/Tweet";
import { Form, TweetButton } from "./style";

type ContentProps = {
  id:number;
  content : string;
  likesCount: number;
  retweetsCount:number;
  lovedCount:number;
}

export const Home = () => {
  const [tweet , setTweet] = useState<string>('');
  const [tweets, setTweets] = useState<ContentProps[]>([
    {
      id: 0,
      content: "Jesus é o caminho a verdade e a vida",
      likesCount: 0,
      retweetsCount: 0,
      lovedCount: 0,
    },
  ]);

  const createNewTweet = (e: FormEvent) => {
    e.preventDefault();
    const newTweet = {
      id: Math.random() * 10,
      content: tweet,
      likesCount: 0,
      retweetsCount: 0,
      lovedCount: 0,
    };
    setTweets([...tweets, newTweet]);
    setTweet("");
    console.log(tweets);
  };

  const handleLike =(id:number) => {
    const uptadedTweet = tweets.map(tweet => {
      if(tweet.id === id)  
        return {...tweet , likesCount:tweet.likesCount + 1};
      return tweet
  })
    setTweets(uptadedTweet);
  }

  const handleRetweet =(id:number) => {
    const commentTweets = tweets.map(tweet => {
      if(tweet.id === id)  
        return {...tweet , retweetsCount:tweet.retweetsCount + 1};
      return tweet
  })
    setTweets(commentTweets);
  }

  const handleLoved =(id:number) => {
    const commentTweets = tweets.map(tweet => {
      if(tweet.id === id)  
        return {...tweet , lovedCount:tweet.lovedCount + 1};
      return tweet
  })
    setTweets(commentTweets);
  }

  // const handleAction = (id: number, action: 'like' | 'retweet' | 'love') => {
  //   const updatedTweets = tweets.map(tweet => {
  //     if (tweet.id === id) {
  //       if (action === 'like') {
  //         return { ...tweet, likesCount: tweet.likesCount + 1 };
  //       } else if (action === 'retweet') {
  //         return { ...tweet, retweetsCount: tweet.retweetsCount + 1 };
  //       } else if (action === 'love') {
  //         return { ...tweet, lovedCount: tweet.lovedCount + 1 };
  //       }
  //     }
  //     return tweet;
  //   });
  //   setTweets(updatedTweets);
  

  // const handleReaction = (id:number, reactions: 'likesCount' | 'retweetsCount' | 'lovedCount') => {
  //   const updatedTweets = tweets.map(tweet => tweet.id === id ? {...tweet , [reactions]:tweet[reactions] + 1} : tweet)
  //   setTweets(updatedTweets)
  // }

  return (
    <div>
      <Header titulo="Para você" />
      <Form onSubmit={createNewTweet}>
        <label htmlFor="">
        <img src="https://github.com/diegofchagas.png" alt="Diego Chagas" />
        <textarea placeholder="O que está acontecendo?"
        value={tweet}
        onChange={(e)=>setTweet(e.target.value)}
        />
        </label>
        <TweetButton type="submit">tweet</TweetButton>
      </Form>
      
        {tweets.map(tweet => <Tweet 
          key={tweet.id}
          content={tweet.content}
          onLike={() => handleLike(tweet.id)}
          onRetweet={() => handleRetweet(tweet.id)}
          onLoved={() => handleLoved(tweet.id)}
          likesCount={tweet.likesCount} 
          retweetsCount={tweet.retweetsCount} 
          lovedCount={tweet.lovedCount}        
          />
        
        )}
    </div>
  );
};
