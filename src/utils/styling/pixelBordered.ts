import { css } from "styled-components";

const pixelBordered = (width: number, color: string) => {
  return css`
    border: none;
    box-shadow:
      ${width}px 0 0 0 ${color}, // right
      -${width}px 0 0 0 ${color}, // left
      0 ${width}px 0 0 ${color}, // top
      0 -${width}px 0 0 ${color}; // bottom
  `;
}

export default pixelBordered;