import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckoutButtonStyles from "../StyledComponents/Buttons/CheckoutButton";

export default function CheckoutButton({
  btnHandler,
  btnText,
  customPadding,
  price,
  isDisabled,
}) {
  return (
    <CheckoutButtonStyles
      onClick={btnHandler}
      style={{ padding: customPadding }}
      isJustifyContentCenter={price}
      disabled={isDisabled}
    >
      {btnText}
      {price && (
        <p>
          Rs.{price}&nbsp;&nbsp;
          <FontAwesomeIcon icon={faGreaterThan} />
        </p>
      )}
    </CheckoutButtonStyles>
  );
}
