import { FormInput } from "../components/Input/FormInput";
import {
  AuthContainerStyles,
  SectionRight,
  SectionLeft,
} from "../components/StyledComponents/Auth/Auth";
import SimpleButton from "../components/Button/simpletBtn";
import { setAccessToken } from "../utils/storageUtils";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();

  const loginBtnHandler = (e) => {
    e.preventDefault();
    setAccessToken("asda##jh08@KJsdfs9d8");
    router.push("/home");
  };

  return (
    <>
      <AuthContainerStyles>
        <SectionLeft>
          <h1>Login</h1>
          <p>Get access to your order, Wishlist and Recommendations</p>
        </SectionLeft>
        <SectionRight>
          <FormInput
            id="email"
            inputType="text"
            labelName="Email"
            onChangeHandler={() => {}}
            placeholderText=""
            isRequired={true}
          />
          <FormInput
            id="password"
            inputType="password"
            labelName="Password"
            onChangeHandler={() => {}}
            placeholderText=""
            isRequired={true}
          />
          <SimpleButton btnText="Login" btnHandler={loginBtnHandler} />
        </SectionRight>
      </AuthContainerStyles>
    </>
  );
};

export default SignIn;
