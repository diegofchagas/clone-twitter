import styled from 'styled-components';

export const Form = styled.form`
  padding: 1.5rem 1.25rem;
  display:flex;
  flex-direction:column;
  gap:0.5rem;

  label{
    display:flex;
    align-items:center;
    gap:0.75rem;
  }

  img{
    width:3.5rem;
    height:3.5rem;
    border-radius:99px;
    gap:0.5rem;
  }

  textarea{
    flex:1;
    resize:none;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 0.75rem;
    resize: none;
    background-color: transparent;
    outline: none;
    border:none;
    color: white;

    &::placeholder{
      color:#6b7280;
    }
  }
`;

export const TweetButton = styled.button`
  border:none;
  margin-left:auto;
  border-radius: 99px;
  padding: 0.75rem 1.5rem;
  background-color: #60a5fa;
  font-weight: 900;
  font-size: .875rem;
  line-height: 23px;
  color: #FFFFFF;
  cursor: pointer;

  &:hover{
    filter: brightness(0.9);
  }
`;
