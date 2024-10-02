import styled from 'styled-components';

export const TweetContainer = styled.div`
  padding: 1.5rem 1.25rem;
  display:grid;
  grid-template-columns: 3rem 1fr;
  gap:0.75rem;
  border-top:1px solid #1F2937;
  border-bottom: 1px solid #1F2937;
  

  img{
    width:3rem;
    height:3rem;
    border-radius:99px;
  }
`;

export const TweetContent = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.5rem;

  .content-header{
    display:flex;
    align-items:center;
    gap:0.25rem;

    span{
      font-size:.875rem;
      color:#93c5fd;
    }
  }

  p{
    padding-top:.500rem;
    font-size:.875rem;
    line-height:125%;
  }
  `;


export const TweetFooter = styled.div`
  display:flex;
  align-items:center;
  gap:3rem;
  margin-top:0.75rem;
`;


export const FooterButton = styled.button`
  display:flex;
  align-items:center;
  gap:0.5rem;
  background:transparent;
  border:none;
  font-size:.875rem;
  font-size:.875rem;
  color: #9ca3af;
  cursor: pointer;
  
  &:hover{
    color:#93c5fd;
  }

`;