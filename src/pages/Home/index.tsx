import { Header } from "../../components/Header";
import { Tweet } from "../../components/Tweet";
import { Form, TweetButton } from "./style";

export const Home = () => {
  return (
    <div>
      <Header titulo="Para você" />
      <Form>
        <label htmlFor="">
        <img src="https://github.com/diegofchagas.png" alt="Diego Chagas" />
        <textarea placeholder="O que está acontecendo?" />
        </label>
        <TweetButton type="submit">tweet</TweetButton>
      </Form>
      
      <Tweet/>
    </div>
  );
};
