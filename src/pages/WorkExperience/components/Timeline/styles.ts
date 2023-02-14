import styled from 'styled-components'

export const TimelineContainer = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;

  ::after {
    background-color: #e270f1;
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }
`
