import React from "react";
import styled from "styled-components";

const StyledInfoLink = styled.a`
  position: absolute;
  top: 2.3vh;
  right: 1.5vw;
  width: 5vw;
  height: 7vh;
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;
    & .circle {
      fill: rgba(169, 166, 158, 0.5);
      mix-blend-mode: color-burn;
    }
    & #article {
      opacity: 0;
      fill: #003f5d;
    }
    & #letter-i-stroke {
      stroke-width: 2px;
      opacity: 0;
    }
    /* filter: drop-shadow(0px 0px 2px rgba(169, 166, 158, 1) ;); */
    &:hover {
      & > .circle {
        animation: fillIn 0.5s ease-in-out forwards;
      }
      & g.dot #black-dot {
        animation: fadeIn 0.5s ease-in-out forwards reverse;
      }
      & g#article {
        animation: fadeIn 1.2s ease-in-out forwards;
      }
      & #letter-i-stroke {
        animation: fadeIn 0.8s ease-in-out forwards;
      }
    }
  }
  @keyframes fillIn {
    0% {
      fill: #a9a69e;
    }
    100% {
      fill: rgba(0, 67, 95, 0.6);
    }
  }
  @keyframes strokeIn {
    0% {
      fill: #a9a69e;
    }
    100% {
      fill: #000;
    }
  }
`;

const InfoLink = () => (
  <StyledInfoLink
    className="info-link"
    href="https://css-tricks.com/drawing-realistic-clouds-with-svg-and-css/"
  >
    <svg viewBox="0 0 200 200">
      <g id="article" fill="#fff">
        <path d="M26.2 194.9H11.7l-2.8 4.7H1.5l13.9-21.9h7.2l14 21.9H29l-2.8-4.7zm-2.3-3.8l-5-8.4-5 8.4h10zM59.8 199.6l-6-6.1h-6.7v6.1h-7.2v-21.9h13.5c2.8 0 5.2.3 7.2 1 2 .6 3.6 1.6 4.7 2.8s1.7 2.6 1.7 4.2-.6 3-1.7 4.2c-1.1 1.2-2.7 2.1-4.8 2.7l7 7h-7.7zm-1.9-16.8c-1.1-.7-2.8-1-5-1H47v7.6h6c2.2 0 3.8-.3 5-1 1.1-.7 1.7-1.6 1.7-2.8-.1-1.2-.6-2.1-1.8-2.8zM78.7 181.9h-10v-4.1H96v4.1H86v17.8h-7.2v-17.8zM99.9 177.7h7.2v21.9h-7.2v-21.9zM120.9 198.5c-2.6-1-4.6-2.3-6.1-4-1.5-1.7-2.2-3.7-2.2-5.8 0-2.2.7-4.1 2.2-5.8 1.5-1.7 3.5-3.1 6.1-4 2.6-1 5.5-1.5 8.7-1.5 2.7 0 5.2.3 7.4 1s4 1.6 5.5 2.9l-4.6 3c-2.1-1.7-4.7-2.6-7.9-2.6-1.9 0-3.7.3-5.2.9-1.5.6-2.7 1.4-3.6 2.5-.9 1.1-1.3 2.3-1.3 3.6 0 1.4.4 2.6 1.3 3.6.8 1.1 2 1.9 3.6 2.5 1.5.6 3.2.9 5.2.9 3.1 0 5.8-.9 7.9-2.6l4.6 3c-1.5 1.3-3.3 2.2-5.5 2.9s-4.7 1-7.4 1c-3.3 0-6.2-.5-8.7-1.5zM147.3 177.7h7.2v17.8h15.7v4.1h-22.9v-21.9zM198.5 195.6v4.1h-24.2v-21.9h23.6v4.1h-16.4v4.8H196v3.9h-14.5v5.1h17z" />
      </g>
      <g className="circle">
        <path
          id="circle"
          d="M100 168.7c-45.3 0-82.2-36.9-82.2-82.2S54.7 4.3 100 4.3s82.2 36.9 82.2 82.2-36.9 82.2-82.2 82.2z"
        />
        <path
          id="circle-border"
          fill="green"
          d="M100 8.6c42.9 0 77.8 34.9 77.8 77.9s-34.9 77.9-77.8 77.9-77.8-34.9-77.8-77.9S57.1 8.6 100 8.6m0-8.6C52.2 0 13.5 38.7 13.5 86.5S52.2 173 100 173s86.5-38.7 86.5-86.5S147.8 0 100 0z"
        />
      </g>
      <path
        id="letter_i"
        fill="#444"
        d="M73.3 130.5c.5-2 1.3-4.5 2.3-7.8l13.5-43.5c.1-.5.3-1 .4-1.5.1-.5.2-1 .2-1.4 0-2.6-.9-4.2-2.8-4.8-1.9-.6-5.2-1-10.2-1.2v-5.1c4.1-.3 10.1-.8 18-1.6 7.8-.8 13.4-1.5 16.7-2l9.4-1.6-17.1 55.1c-1.4 4.7-2.4 8-2.9 9.8-1.3 4.7-1.9 7.7-1.9 9.1 0 1.4.4 2.3 1.1 2.7.7.4 1.5.6 2.4.6 2.2 0 5-1.7 8.3-5 3.3-3.3 6.2-6.8 8.7-10.5l4.8 2.7c-7.2 9.3-12.6 15.5-16.4 18.7-6.2 5.3-12.9 7.9-20 7.9-4 0-7.6-1.1-10.8-3.3-3.2-2.2-4.8-5.5-4.8-10-.2-1.4.2-3.9 1.1-7.3z"
      />
      <path
        id="letter-i-stroke"
        strokeWidth="1"
        stroke="#fff"
        d="M73.3 130.5c.5-2 1.3-4.5 2.3-7.8l13.5-43.5c.1-.5.3-1 .4-1.5.1-.5.2-1 .2-1.4 0-2.6-.9-4.2-2.8-4.8-1.9-.6-5.2-1-10.2-1.2v-5.1c4.1-.3 10.1-.8 18-1.6 7.8-.8 13.4-1.5 16.7-2l9.4-1.6-17.1 55.1c-1.4 4.7-2.4 8-2.9 9.8-1.3 4.7-1.9 7.7-1.9 9.1 0 1.4.4 2.3 1.1 2.7.7.4 1.5.6 2.4.6 2.2 0 5-1.7 8.3-5 3.3-3.3 6.2-6.8 8.7-10.5l4.8 2.7c-7.2 9.3-12.6 15.5-16.4 18.7-6.2 5.3-12.9 7.9-20 7.9-4 0-7.6-1.1-10.8-3.3-3.2-2.2-4.8-5.5-4.8-10-.2-1.4.2-3.9 1.1-7.3z"
      />
      <g className="dot">
        <path
          id="tricks-dot"
          fill="#DB914F"
          stroke="#3E3F4D"
          strokeMiterlimit="10"
          d="M118.9 48.7c-.6 1.1-1.8 1.7-2.8 1.7-.4 0-.9-.1-1.3-.3l-9-6.3.8 10.5c0 1.5-1.4 2.7-3.3 2.7-1.8 0-3.3-1.2-3.3-2.6l1.1-10.8-9.5 6.6c-1.3.8-3.2.1-4.1-1.4-.9-1.6-.5-3.5.8-4.2l10.1-5-10.1-5.1c-1.3-.8-1.7-2.7-.8-4.3.9-1.6 2.7-2.2 4.1-1.4l9.4 6.7-1.2-9.8c0-1.5 1.4-2.2 3.3-2.2 1.8 0 3.3.7 3.3 2.2l-.7 10 9.2-6.4c1.3-.8 3.2-.2 4.1 1.4.3.6.5 1.2.5 1.8 0 1-.5 1.9-1.3 2.4l-9.8 4.8 9.6 4.8c1.5.7 1.8 2.6.9 4.2z"
        />
        <circle id="black-dot" fill="#444" cx="103" cy="39.5" r="18.5" />
      </g>
    </svg>
  </StyledInfoLink>
);

export default InfoLink;
