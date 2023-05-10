import { css } from "styled-components";

const pixelBordered = (width = '0.4rem', color = 'var(--secondary-color-dark)') => {
  return css`
    border: none;
    box-shadow:
      ${width} 0 0 0 ${color}, // right
      -${width} 0 0 0 ${color}, // left
      0 ${width} 0 0 ${color}, // top
      0 -${width} 0 0 ${color}; // bottom
  `;
}

export default pixelBordered;