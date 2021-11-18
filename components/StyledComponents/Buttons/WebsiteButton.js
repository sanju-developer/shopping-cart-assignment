import styled from "styled-components";
import { btnColor, whiteColor } from "../../../styles/variables.module.scss";

const CheckoutButtonStyles = styled.button`
  position: relative;
  background-color: ${btnColor};
  color: ${whiteColor};
  padding: 12px 14px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background: ${(props) => (props.showLoader ? "rgb(135 6 6 / 50%)" : "")};

  div {
    position: absolute;
    top: -14px;
    width: 15px;
    height: 15px;
    left: 50%;
  }
`;

export default CheckoutButtonStyles;
