import WebsiteButton from "../StyledComponents/Buttons/WebsiteButton";

export default function SimpleButton({ btnHandler, btnText, customPadding }) {
  return (
    <WebsiteButton onclick={btnHandler} style={{ padding: customPadding }}>
      {btnText}
    </WebsiteButton>
  );
}
