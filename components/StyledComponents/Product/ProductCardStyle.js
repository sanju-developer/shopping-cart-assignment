import styled from "styled-components";

import { fontWithBlackAndWeight } from "../mixins";
import { greyColor } from "../../../styles/variables.module.scss";

export const ProductCardStyle = styled.div`
  max-width: 25%;
  padding: 4px 8px;
  margin-bottom: 10px;
  border-bottom: 2px dotted ${greyColor};
  h4 {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    max-width: 50%;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const ProductDetailStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 5px 0 5px -2px #f4f4f4;
  padding-top: 24px;
  p {
    ${fontWithBlackAndWeight("10px")}
    padding:4px;
    background-color: ${greyColor};
    height: 63px;
    overflow: hidden;
  }
  @media screen and (max-width: 768px) {
    justify-content: strech;
    p {
      margin-left: 16px;
      width: 50%;
      height: 100%;
    }
  }
`;

export const BtnSectionStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  p {
    ${fontWithBlackAndWeight("10px")}
  }
  @media screen and (max-width: 768px) {
    justify-content: strech;
    p {
      display: none;
    }
    button {
      width: 100%;
    }
  }
`;
