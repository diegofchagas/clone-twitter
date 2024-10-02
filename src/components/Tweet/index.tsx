import { ArrowsClockwise, ChatCircle, Heart, ThumbsUp } from "@phosphor-icons/react";
import { FooterButton, TweetContainer, TweetContent, TweetFooter } from "./styles";

export const Tweet = ({ content }: { content: string }) => {
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
    
      <p> Teste de conteudo</p>

      <TweetFooter>
        <FooterButton>
          10 <ThumbsUp size={16} />
        </FooterButton>
        <FooterButton>
          <ChatCircle  size={16}/>
          10
        </FooterButton>
        <FooterButton>
          10 <ArrowsClockwise size={16} />
        </FooterButton>
        <FooterButton>
          10 <Heart  size={16}/>
        </FooterButton>
      </TweetFooter>
      </TweetContent>
    </TweetContainer>
  );
};
