import styled from "styled-components";
import { btnColor, whiteColor } from "../../../styles/variables.module.scss";

const CheckoutButton = styled.button`
  background-color: ${btnColor};
  color: ${whiteColor};
  padding: 8px;
  border: none;
  border-radius: 2px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: ${(props) =>
    props?.isJustifyContentCenter ? `space-between` : `center`};
  align-items: center;
`;

export default CheckoutButton;
