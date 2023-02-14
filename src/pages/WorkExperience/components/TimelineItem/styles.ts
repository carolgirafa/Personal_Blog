import styled from 'styled-components'

export const TimelineItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
  position: relative;
  margin: 10px -27px;
  width: 50%;

  :nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 2rem;
    padding-right: 0;
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  :nth-child(odd) .div .circle {
    right: auto;
    left: -40px;
  }

  @media only screen and (max-width: 1023px) {
    .div {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 767px) {
    .div,
    .timeline-item:nth-child(odd) .div {
      padding: 15px 10px;
      text-align: center;
      align-items: center;
    }

    .div .tag {
      width: calc(100% - 10px);
      text-align: center;
    }

    .div time {
      margin-top: 20px;
    }
  }
`

export const TagContainer = styled.div`
  .tag {
    color: rgb(0, 0, 0);
    font-size: 12px;
    font-weight: bold;
    top: 5px;
    left: auto;
    right: 5px;
    letter-spacing: 1px;
    padding: 5px;
    position: absolute;
    text-transform: uppercase;
    border-radius: 5px;
    background: #ffff;
  }
`

// export const Circle = styled.div`
//   background-color: #fff;
//   border: 3px solid #e270f1;
//   border-radius: 50%;
//   position: absolute;
//   top: calc(50% - 10px);
//   right: -40px;
//   width: 20px;
//   height: 20px;
//   z-index: 100;
// `
