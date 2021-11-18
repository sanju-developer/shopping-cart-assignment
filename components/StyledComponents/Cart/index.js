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
  height: 87%;
  background: ${whiteColor};
  position: fixed;
  right: 8rem;
  top: 75px;
  background: ${greyColor};

  @media screen and (max-width: 768px) {
    width: 100%;
    right: 0px;
  }
`;

export const CartHeaderStyle = styled.header`
  width: 100%;
  background: ${blackColor};
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${whiteColor};
  padding: 12px;

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
`;

export const CheckoutSection = styled.footer`
  position: absolute;
  bottom: 0px;
  padding: 8px;
  width: 100%;
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
  background: ${whiteColor};
  padding: 16px;
  margin-top: 16px;
`;

export const CartCardLeftSection = styled.div`
  display: flex;
  align-items: stretch;
  > *:last-child {
    ${fontWithBlackAndWeight("18px")};
    align-self: self-end;
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
  margin: 16px;
  padding: 10px 16px;
  align-items: center;

  p {
    padding-left: 24px;
    margin: 0px;
    ${fontWithBlackAndWeight()};
  }
`;
