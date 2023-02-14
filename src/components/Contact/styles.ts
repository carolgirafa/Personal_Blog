import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  margin-left: 30px;
  margin-right: 30px;

  @media (max-width: 768px) {
    font-size: 87.5%;
    grid-template-columns: 1fr;
  }
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 0.75rem;

  strong {
    color: ${(props) => props.theme['gray-400']};
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-400']};
    line-height: 1.5;
    padding: 5px;
    text-align: center;
  }
`

export const LinkSectionContainer = styled.div`
  display: flex;
  padding: 1rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  a {
    height: 2.2rem;
    width: 12rem;
    background: linear-gradient(
      to bottom,
      #e500a4 0%,
      #bc00dd 50%,
      #8900f2 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    gap: 0.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-800']};
    text-decoration: none;
  }

  a:hover {
    transform: scale(1.05);
    transition: all 0.1s;
  }
`
