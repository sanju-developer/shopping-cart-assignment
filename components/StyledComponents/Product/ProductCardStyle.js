import styled from "styled-components";

import { fontWithBlackAndWeight } from "../mixins";
import { greyColor } from "../../../styles/variables.module.scss";

export const ProductCardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 25%;
  padding: 4px 8px;
  margin-bottom: 10px;
  border-bottom: 2px dotted ${greyColor};
  box-shadow: 5px 0 5px -2px #f4f4f4;

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
  padding-top: 24px;
  // p {
  //   ${fontWithBlackAndWeight("10px")}
  //   padding:4px;
  //   background-color: ${greyColor};
  //   height: 63px;
  //   overflow: hidden;
  // }
  // @media screen and (max-width: 768px) {
  //   justify-content: strech;
  //   p {
  //     margin-left: 16px;
  //     width: 50%;
  //     height: 100%;
  //   }
  // }
  @media screen and (max-width: 480px) {
    flex-wrap: nowrap;
    justify-content: space-evenly;
    box-shadow: none;
  }
`;

export const BtnSectionStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  p:first-child {
    width: 100%;
    ${fontWithBlackAndWeight("10px")}
    padding:4px;
    background-color: ${greyColor};
    height: 60px;
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
  p {
    ${fontWithBlackAndWeight("10px")}
  }
  @media screen and (max-width: 768px) {
    justify-content: strech;
    width: 50%;
    p:first-child {
      margin: 0px;
    }
    p:nth-child(2) {
      display: none;
    }
    button {
      width: 100%;
      font-size: 12px;
    }
  }

  @media screen and (max-width: 480px) {
    p:first-child {
      margin: 0px;
    }
  }
`;
