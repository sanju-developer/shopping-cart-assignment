import styled from "styled-components";
import { btnColor, whiteColor } from "../../../styles/variables.module.scss";

const WebsiteButton = styled.button`
  background-color: ${btnColor};
  color: ${whiteColor};
  padding: 12px 14px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

export default WebsiteButton;
