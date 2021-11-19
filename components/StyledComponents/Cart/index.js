import styled from "styled-components";
import {
  whiteColor,
  blackColor,
  fz12,
  greyColor,
} from "../../../styles/variables.module.scss";
import { navTextsMixin, fontWithBlackAndWeight } from "../mixins";

export const CartContainerStyles = styled.section`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1200;

  @media screen and (max-width: 768px) {
    top: 60px;
    background: ${greyColor};
  }
`;

export const CartStyles = styled.div`
  width: 40%;
  height: calc(100% - 100px);
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${whiteColor};
  position: fixed;
  right: 8rem;
  top: 75px;
  background: ${greyColor};
  padding-bottom: 70px;

  @media screen and (max-width: 768px) {
    width: 100%;
    right: 0px;
    height: calc(100% - 150px);
  }
`;

export const CartHeaderStyle = styled.header`
  position: fixed;
  width: inherit;
  background: ${blackColor};
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${whiteColor};
  padding: 12px;
  z-index: 99;

  @media screen and (max-width: 768px) {
    background: ${whiteColor};
    color: ${blackColor};
  }
`;

export const CartHeaderLeftSection = styled.div`
  display: flex;
  align-items: center;

  h5 {
    margin: 0px;
  }

  span {
    font-size: ${fz12};
  }
`;

export const CartHeaderRightSection = styled.div`
  button {
    width: 30px;
    background: transparent;
    border: none;
    color: ${whiteColor};
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    button {
      background: none;
      color: ${blackColor};
    }
  }
`;

export const CheckoutSection = styled.footer`
  position: fixed;
  bottom: 0px;
  padding: 8px;
  width: inherit;
  background: ${whiteColor};
  text-align: center;
  p {
    font-size: ${fz12};
    margin: 8px 0px;
  }
`;

export const CartCardStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 16px;
  padding-top: 70px;
`;

export const CartCardSection = styled.div`
  display: flex;
  align-items: stretch;
  background: ${whiteColor};
  margin-bottom: 14px;
  width: 100%;
  padding: 8px 16px;
  div {
    flex-grow: 2;
  }
  > *:last-child {
    ${fontWithBlackAndWeight("18px")};
    align-self: self-end;
    margin: 0px;
  }
`;

export const CartItemDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 12px;

  h4 {
    width: 100%;
    margin: 0;
  }
  p {
    ${fontWithBlackAndWeight()};
  }
  span {
    margin: 0px 10px;
  }
  svg {
    margin: 0px 16px 0px 30px;
  }
  button {
    border-radius: 4px;
    width: 25px;
    height: 25px;
    line-height: 0;
  }
`;

export const PromotionBanner = styled.div`
  display: flex;
  background: ${whiteColor};
  margin: 0px 16px;
  padding: 8px;
  align-items: center;

  p {
    padding-left: 24px;
    margin: 0px;
    ${fontWithBlackAndWeight()};
  }
`;
