import { Header } from "../../components/Header";
import { Tweet } from "../../components/Tweet";
import { Form, TweetButton } from "./style";

export const Home = () => {
  return (
    <div>
      <Header titulo="Para você" />
      <Form>
        <img src="https://github.com/diegofchagas.png" alt="Diego Chagas" />
        <label htmlFor=""></label>
        <textarea placeholder="O que está acontecendo?" />
        <TweetButton type="submit">tweet</TweetButton>
      </Form>
      

      <Tweet/>
    </div>
  );
};
