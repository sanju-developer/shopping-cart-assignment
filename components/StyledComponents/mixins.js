import { css } from "styled-components";
import { textColor, blackColor } from "../../styles/variables.module.scss";

export const navTextsMixin = (fz = "16px") => css`
  font-size: ${fz};
  color: ${textColor};
  font-weight: 500;
`;

export const fontWithBlackAndWeight = (fz = "16px") => css`
  font-size: ${fz};
  color: ${blackColor};
  font-weight: 500;
`;
