import { useDispatch } from "react-redux";

import { FormInput } from "../components/Input/FormInput";
import {
  AuthContainerStyles,
  SectionRight,
  SectionLeft,
} from "../components/StyledComponents/Auth/Auth";
import SimpleButton from "../components/Button/simpletBtn";
import { useRouter } from "next/router";
import loginAction from "../redux/actions/authAction";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const singupBtnHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction());
    router.push("/home");
  };

  return (
    <>
      <AuthContainerStyles>
        <SectionLeft>
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone.</p>
        </SectionLeft>
        <SectionRight>
          <FormInput
            id="firstName"
            inputType="text"
            labelName="First Name"
            onChangeHandler={() => {}}
            placeholderText=""
            isRequired={true}
          />
          <FormInput
            id="lastName"
            inputType="text"
            labelName="Last Name"
            onChangeHandler={() => {}}
            placeholderText=""
            isRequired={true}
          />
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
          <FormInput
            id="cPassword"
            inputType="password"
            labelName="Confirm Password"
            onChangeHandler={() => {}}
            placeholderText=""
            isRequired={true}
          />
          <SimpleButton btnText="Signup" btnHandler={singupBtnHandler} />
        </SectionRight>
      </AuthContainerStyles>
    </>
  );
};

export default SignUp;
