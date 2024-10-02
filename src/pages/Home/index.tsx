import { Header } from "../../components/Header";
import { Form, TweetButton } from "./style";

export const Home = () => {
  return (
    <div>
      <Header titulo="Twitter" />

      <Form>
        <img src="https://github.com/diegofchagas.png" alt="Diego Chagas" />
        <label htmlFor=""></label>
        <textarea placeholder="O que está acontecendo?" />
        <TweetButton type="submit">tweet</TweetButton>
      </Form>
    </div>
  );
};
