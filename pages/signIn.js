import { toast } from "react-toastify";
import { useState } from "react";
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
import { emailValidation } from "../utils/helper";

const SignIn = () => {
  const singInToastId = "#singInToastId#";
  const router = useRouter();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const loginBtnHandler = (e) => {
    e.preventDefault();
    if (!emailValidation(formState.email)) {
      toast.warn("Please enter a valid email.", {
        duration: 5,
        toastId: singInToastId,
      });
      return;
    }
    dispatch(loginAction());
    router.push("/home");
  };

  const inputHandler = (e) => {
    e.preventDefault();
    const { id, value } = e?.target;
    setFormState({ ...formState, [id]: value });
  };

  return (
    <>
      <AuthContainerStyles>
        <SectionLeft>
          <h1>Login</h1>
          <p>Get access to your order, Wishlist and Recommendations</p>
        </SectionLeft>
        <SectionRight onSubmit={loginBtnHandler}>
          <FormInput
            id="email"
            inputType="text"
            labelName="Email"
            onChangeHandler={inputHandler}
            placeholderText=""
            isRequired={true}
            value={formState.email}
          />
          <FormInput
            id="password"
            inputType="password"
            labelName="Password"
            onChangeHandler={inputHandler}
            placeholderText=""
            isRequired={true}
            value={formState.password}
          />
          <SimpleButton type="submit" btnText="Login" btnHandler={() => {}} />
        </SectionRight>
      </AuthContainerStyles>
    </>
  );
};

export default SignIn;
