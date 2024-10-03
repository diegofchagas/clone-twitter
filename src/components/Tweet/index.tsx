import { ArrowsClockwise, Heart, ThumbsUp } from "@phosphor-icons/react";
import { FooterButton, TweetContainer, TweetContent, TweetFooter } from "./styles";


type TweetProps ={
  content: string;
  likesCount: number;
  retweetsCount:number;
  lovedCount:number
  onLike : ()=> void;
  onRetweet : ()=> void;
  onLoved : ()=> void;
}

export const Tweet = ({content, onLike, likesCount,retweetsCount,lovedCount,onRetweet,onLoved}: TweetProps) => {
  
  return (
    <TweetContainer>
      <a href="">
        {" "}
        <img src="https://github.com/diegofchagas.png" alt="Diego Chagas" />
      </a>

      <TweetContent>
        <div className="content-header">
          <strong>Diego Chagas</strong>
          <span>@diegofchagas</span>
        </div>

        <p>{content}</p>

        <TweetFooter>
          <FooterButton 
          onClick={onLike}
          className={ likesCount > 0 ?  'color' : ''}
          >
            {likesCount}
            <ThumbsUp size={16} />
          </FooterButton>

          <FooterButton 
          onClick={onRetweet}
          className={ retweetsCount > 0 ?  'color' : ''}
          >
            {retweetsCount}
            <ArrowsClockwise size={16} />
          </FooterButton>

          <FooterButton 
          onClick={onLoved}
          className={ lovedCount > 0 ?  'color' : ''}
          >
            {lovedCount}
            <Heart size={16} />
          </FooterButton>
        </TweetFooter>
      </TweetContent>
    </TweetContainer>
  );
};


