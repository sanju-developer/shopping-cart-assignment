import { NoDataFoundStyle } from "../StyledComponents/NoDataFound";

export const NoDataFound = ({ text = "No Data Found", additionText = "" }) => {
  return (
    <NoDataFoundStyle>
      <h4>{text}</h4>
      {additionText && <p>{additionText}</p>}
    </NoDataFoundStyle>
  );
};
