import styled from 'styled-components'

export const MenuItemContainer = styled.div`
  width: 11rem;
  height: 8rem;
  border-radius: 15%;
  border: 2px solid ${(props) => props.theme['pink-2']};
  margin: 30px 20px;

  transition: color 0.1s, background-color 0.1s;

  :hover {
    background: linear-gradient(
      to bottom,
      #e500a4 0%,
      #bc00dd 50%,
      #8900f2 100%
    );
    cursor: pointer;
    border: 2px solid ${(props) => props.theme['gray-800']};
    transform: scale(1.05);
    transition: all 0.1s;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['pink-2']};
    text-decoration: none;
    height: 100%;
  }

  a:hover {
    color: ${(props) => props.theme['gray-800']};
  }

  a span {
    margin-top: 0.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1rem;
  }

  a span:hover {
    font-weight: bold;
    text-decoration: none;
  }
`
