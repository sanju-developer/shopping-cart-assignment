import styled from "styled-components";

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
  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  img {
    width: 33%;
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
`;
