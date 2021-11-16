import styled from "styled-components";
import {
  whiteColor,
  blackColor,
  fz12,
} from "../../../styles/variables.module.scss";

export const CartContainerStyles = styled.section`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1200;
`;

export const CartStyles = styled.div`
  width: 40%;
  height: 78%;
  background: ${whiteColor};
  position: fixed;
  right: 8rem;
  top: 75px;
`;

export const CartHeader = styled.header`
  width: 100%;
  background: ${blackColor};
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${whiteColor};
  padding: 12px;
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
