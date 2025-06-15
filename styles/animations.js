import { keyframes } from "styled-components";

export const getIn = keyframes`
  from {
    opacity:0;
    transform:scale(0.6);
    transform: rotateY(50deg);
  }

  to {
    opacity:1;
    transform:scale(1);
    transform: rotateY(0deg);
  }
`;

export const getIn2 = keyframes`
  from {
    opacity:0;
    transform:scale(0.6);
  }

  to {
    opacity:1;
    transform:scale(1);
  }
`;
