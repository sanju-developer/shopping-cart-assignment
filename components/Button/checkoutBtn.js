import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckoutButtonStyles from "../StyledComponents/Buttons/CheckoutButton";

export default function CheckoutButton({
  btnHandler,
  btnText,
  customPadding,
  price,
}) {
  return (
    <CheckoutButtonStyles
      onClick={btnHandler}
      style={{ padding: customPadding }}
    >
      {btnText}
      <p>
        Rs.{price}&nbsp;&nbsp;
        <FontAwesomeIcon icon={faGreaterThan} />
      </p>
    </CheckoutButtonStyles>
  );
}
