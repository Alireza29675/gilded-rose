import { css } from "styled-components";

const clampedText = (maxLines: number) => {
  return css`
    display: -webkit-box;
  -webkit-line-clamp: ${maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  `;
}

export default clampedText;