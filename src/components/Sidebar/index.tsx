import {
  Bell,
  BookmarksSimple,
  DotsThreeCircle,
  EnvelopeSimple,
  Feather,
  Hash,
  House,
  TwitterLogo,
  User,
  UsersThree,
} from "@phosphor-icons/react";
import { Aside, NavBar, TweetButton } from "./style";

export const Sidebar = () => {
  return (
    <Aside>
      <span><TwitterLogo size={32}/></span>
      <NavBar>
        <ul>
          <li>
            <a>
              <House weight="fill" /> <span>Home</span>
            </a>
          </li>
          <li>
            <a>
              <Hash /> <span>Explore</span>
            </a>
          </li>
          <li>
            <a>
              <Bell /> <span>Notifications</span>
            </a>
          </li>
          <li>
            <a>
              <EnvelopeSimple /> <span>Messages</span>
            </a>
          </li>
          <li>
            <a>
              <BookmarksSimple /> <span>Bookmarks</span>
            </a>
          </li>
          <li>
            <a>
              <UsersThree /> <span>Communities</span>
            </a>
          </li>
          <li>
            <a>
              <User /> <span>Profile</span>
            </a>
          </li>
          <li>
            <a>
              <DotsThreeCircle /> <span>More</span>
            </a>
          </li>
        </ul>
      </NavBar>

      <TweetButton>
      <Feather size={24}weight="fill" />
        <span>Tweet</span>
      </TweetButton>
    </Aside>
  );
};
