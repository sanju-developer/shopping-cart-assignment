import styled from "styled-components";
import { fz12 } from "../../../styles/variables.module.scss";

export const CategoryCardWrapperStyle = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CategoryCardStyle = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 16px;
  padding: 16px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  img {
    width: 33%;
  }

  @media screen and (max-width: 480px) {
    padding: 16px 0px;

    img {
      width: 40%;
    }
  }
`;

export const CategoryCardDetailStyle = styled.div`
  text-align: center;
  width: 77%;
  p {
    margin-top: 0px;
    font-size: 12px;
    font-weight: 500;
  }
  button {
    margin-top: 16px;
  }

  @media screen and (max-width: 480px) {
    width: 60%;
    font-size: ${fz12};

    p {
      font-size: 10px;
    }
    button {
      margin-top: 6px;
      padding: 8px;
      font-size: 8px;
    }
  }
`;
