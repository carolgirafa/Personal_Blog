import styled from 'styled-components'

export const TimelineItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 6rem;
  width: 11rem;
  padding: 0.5rem;

  ::after {
    background-color: ${(props) => props.theme['gray-600']};
    content: '';
    position: absolute;
    width: 200px;
    height: 4px;
    top: 60px;
  }

  span {
    font-style: bold;
    font-size: 1rem;
    line-height: 1.5rem;
    align-content: flex-start;
    padding: 0.5rem;
    margin-top: 1rem;
  }
`

export const TimelineItemTopContainer = styled.div`
  button {
    display: flex;
    border-radius: 8px;
    border-style: none;
    background-color: ${(props) => props.theme['gray-600']};
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 8rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme['gray-300']};

    :hover {
      cursor: pointer;
      border: 2px solid ${(props) => props.theme['pink-2']};
      color: ${(props) => props.theme['pink-2']};
      background-color: ${(props) => props.theme['gray-700']};
    }

    :focus {
      border: 2px solid ${(props) => props.theme['pink-2']};
      color: ${(props) => props.theme['pink-2']};
      background-color: ${(props) => props.theme['gray-700']};
    }
  }

  ::after {
    background-color: ${(props) => props.theme['gray-600']};
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 1.1rem;
    height: 1.1rem;
  }
`

// export const TagContainer = styled.div`
//   .tag {
//     color: rgb(0, 0, 0);
//     font-size: 12px;
//     font-weight: bold;
//     top: 5px;
//     left: auto;
//     right: 5px;
//     letter-spacing: 1px;
//     padding: 5px;
//     position: absolute;
//     text-transform: uppercase;
//     border-radius: 5px;
//     background: #ffff;
//   }
// `
