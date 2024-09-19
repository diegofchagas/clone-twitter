import styled from 'styled-components';

export const Aside = styled.div`
  padding: 1.5rem 1.25rem;
  display:flex;
  flex-direction:column;
  gap:1.5rem;
  color:white;
`;

export const NavBar = styled.nav`
  display:flex;
  flex-direction:column;
  gap:2rem;

  ul{
    margin-bottom: 1.5rem;
    list-style-type: none;
  }

  li a{
    display:flex;
    align-items:center;
    gap:1.25rem;
    font-size:1.25rem;
    line-height:140%;
    cursor: pointer;
  }

  li a:hover{
    background-color:#4B5563;
  }
`;

export const TweetButton = styled.button`
  background-color:#60A5FA;
  border-radius:99px;
  padding:1rem;
  width:100%;
  color:white;
  font-weight:800;
  line-height:140%;
  border:none;
  cursor: pointer;
`;
