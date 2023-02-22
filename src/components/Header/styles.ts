import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  background-color: ${(props) => props.theme['gray-800']};
  /* border-bottom: 1px solid ${(props) => props.theme['pink-2']}; */

  img {
    height: 4rem;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    font-style: italic;
    background: linear-gradient(
      to bottom,
      #f20089 0%,
      #d100d1 50%,
      #6a00f4 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
