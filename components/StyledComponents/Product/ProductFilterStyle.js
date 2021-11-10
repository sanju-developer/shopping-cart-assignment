import styled from "styled-components";
import { navTextsMixin } from "../mixins";

import {
  greyColor,
  btnColor,
  whiteColor,
} from "../../../styles/variables.module.scss";
import "../../../styles/mixins.module.scss";

export const ProductFilterStyle = styled.nav`
  width: 20%;
  background-color: ${greyColor};
  ${navTextsMixin("12px")}

  ul {
    margin: 0px;
    list-style: none;
    padding: 0px;
  }
  li {
    padding: 8px;
    cursor: pointer;
    border-bottom: 1px solid #bfbfbf;
  }
  li.active {
    color: ${btnColor};
  }
`;

export const DropdownMobileFilter = styled.div`
  width: 100%;
  select {
    width: 100%;
    margin-top: 25px;
    height: 40px;
    padding: 8px;
    background-color: ${btnColor};
    color: ${whiteColor};
    border: none;
  }
`;
