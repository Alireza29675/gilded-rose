import { css } from "styled-components"

const tooltipOnHover = (tooltip: string) => {
  return css`
    &:hover:after {
      content: "${tooltip}";
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
      padding: 0.5rem;
      background-color: #000;
      color: #fff;
      font-size: 0.75rem;
      border-radius: 0.25rem;
      white-space: nowrap;
      z-index: 1;
    }

    &:hover:before {
      content: "";
      position: absolute;
      top: -7px;
      left: 50%;
      transform: translateX(-50%);
      border: 0.5rem solid transparent;
      border-top-color: #000;
      z-index: 1;
    }
  `
}

export default tooltipOnHover