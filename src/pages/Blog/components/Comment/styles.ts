import styled from 'styled-components'

export const CommentContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;

  div {
    flex: 1;
  }

  div footer {
    margin-top: 0.5rem;
  }

  div footer button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['gray-300']};
    cursor: pointer;

    display: flex;
    align-items: center;

    border-radius: 2px;
  }

  footer button:hover {
    color: ${(props) => props.theme['pink-2']};
  }

  footer button svg {
    margin-right: 0.5rem;
  }

  footer button span::before {
    content: '\2022';
    padding: 0 0.25rem;
  }
`

export const CommentContentContainer = styled.div`
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme['gray-900']};
  padding: 1rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  header button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['gray-400']};
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;
  }

  header button:hover {
    color: ${(props) => props.theme['gray-700']};
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme['gray-300']};
  }
`

export const AuthorAndTimeContainer = styled.div`
  strong {
    display: block;
    font-size: 0.875rem;
    line-height: 1.6;
  }

  time {
    display: block;
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${(props) => props.theme['gray-400']};
  }
`
