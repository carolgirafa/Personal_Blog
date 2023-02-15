import styled from 'styled-components'

export const PostContainer = styled.div`
  background: ${(props) => props.theme['gray-700']};
  border-radius: 8px;
  padding: 2.5rem;
  margin: 1rem;
  width: 80%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header time {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-400']};
  }
`

export const ContentContainer = styled.div`
  line-height: 1.6;
  color: ${(props) => props.theme['gray-400']};
  margin-top: 1.5rem;

  p {
    margin-top: 1rem;
  }

  a {
    font-weight: bold;
    color: ${(props) => props.theme['pink-2']};
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme['pink-1']};
  }
`

export const CommentContainer = styled.form`
  width: 100%;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${(props) => props.theme['gray-600']};

  div textarea {
    width: 100%;
    background: ${(props) => props.theme['gray-900']};
    border: 0;
    resize: none;
    height: 3rem;
    padding: 0.8rem;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-100']};
    margin-top: 0.5rem;
  }

  textarea {
    width: 100%;
    background: ${(props) => props.theme['gray-900']};
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-100']};
    line-height: 1.4;
    margin-top: 1rem;
  }

  footer {
    visibility: hidden;
    max-height: 0;
  }

  :focus-within footer {
    visibility: visible;
    max-height: none;
  }

  button[type='submit'] {
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    border-radius: 8px;
    border: 0;
    background: ${(props) => props.theme['pink-2']};
    color: white;
    font-weight: bold;
    cursor: pointer;

    transition: background-color 0.1s;
  }

  button[type='submit']:not(:disabled):hover {
    background: ${(props) => props.theme['pink-1']};
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const CommentListContainer = styled.div`
  margin-top: 0.5rem;
`
