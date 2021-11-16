import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { FormInput } from "../components/Input/FormInput";
import {
  AuthContainerStyles,
  SectionRight,
  SectionLeft,
} from "../components/StyledComponents/Auth/Auth";
import SimpleButton from "../components/Button/simpletBtn";
import loginAction from "../redux/actions/authAction";

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginBtnHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction());
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
