import WebsiteButton from "../StyledComponents/WebsiteButton";

export default function SimpleButton({ btnHandler, btnText }) {
  return <WebsiteButton onclick={btnHandler}>{btnText}</WebsiteButton>;
}
