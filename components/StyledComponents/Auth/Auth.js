import styled from "styled-components";
import { greenColor } from "../../../styles/variables.module.scss";

export const AuthContainerStyles = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: flex-start;
  padding: 60px 16px 16px 16px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
  }
`;

export const SectionLeft = styled.div``;

export const SectionRight = styled.form`
  .input-group {
    position: relative;
    margin-bottom: 24px;
    label {
      position: absolute;
      top: 12px;
      pointer-events: none;
      left: 5px;
    }
    input:focus {
      outline: none;
      border-bottom: 2px solid ${greenColor};
    }
    input {
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 300px;
      border: none;
      border-bottom: 1px solid #757575;
    }

    input:focus ~ label,
    input:valid ~ label {
      top: -16px;
      font-size: 14px;
      color: ${greenColor};
    }
  }
  button {
    width: 100%;
  }
`;
