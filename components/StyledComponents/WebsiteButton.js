import styled from "styled-components";
import { btnColor, whiteColor } from "../../styles/variables.module.scss";

const WebsiteButton = styled.button`
  background-color: ${btnColor};
  padding: 12px 14px;
  border: none;
  border-radius: 2px;
  color: ${whiteColor};
  cursor: pointer;
`;

export default WebsiteButton;
