import WebsiteButton from "../StyledComponents/Buttons/WebsiteButton";

export default function SimpleButton({ btnHandler, btnText }) {
  return <WebsiteButton onclick={btnHandler}>{btnText}</WebsiteButton>;
}
