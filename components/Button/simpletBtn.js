import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomLoader } from "../Loaders";
import WebsiteButton from "../StyledComponents/Buttons/WebsiteButton";

export default function SimpleButton({
  btnHandler,
  btnText,
  customPadding,
  isDisabled,
  showLoader,
  type = "button",
}) {
  return (
    <WebsiteButton
      onClick={btnHandler}
      style={{ padding: customPadding }}
      disabled={isDisabled}
      showLoader={showLoader}
      type={type}
    >
      {btnText}
      {showLoader && <CustomLoader />}
    </WebsiteButton>
  );
}
