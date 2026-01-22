import { keyframes } from '@emotion/react';

export const sparkle = keyframes`
  0% {
   opacity: 1;
  }
  50% {
   opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
    `;
