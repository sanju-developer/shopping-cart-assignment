import styled from "styled-components";
import { btnColor, whiteColor } from "../../../styles/variables.module.scss";

const CheckoutButtonStyles = styled.button`
  background-color: ${btnColor};
  color: ${whiteColor};
  padding: 12px 14px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export default CheckoutButtonStyles;
