import { useState } from "react";
import { toast } from "react-toastify";
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
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const singupToastId = "#singupToastId#";

  const singupBtnHandler = (e) => {
    e.preventDefault();
    if (formState.password !== formState.cPassword) {
      toast.warn("Password and Confirm Password not matched.", {
        duration: 5,
        toastId: singupToastId,
      });
      return;
    }

    dispatch(loginAction());
    router.push("/home");
  };

  const inputHandler = (e) => {
    const { id, value } = e?.target;
    setFormState({ ...formState, [id]: value });
  };

  return (
    <>
      <AuthContainerStyles>
        <SectionLeft>
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone.</p>
        </SectionLeft>
        <SectionRight onSubmit={singupBtnHandler}>
          <FormInput
            id="firstName"
            inputType="text"
            labelName="First Name"
            onChangeHandler={inputHandler}
            placeholderText=""
            isRequired={true}
            value={formState.firstName}
          />
          <FormInput
            id="lastName"
            inputType="text"
            labelName="Last Name"
            onChangeHandler={inputHandler}
            placeholderText=""
            isRequired={true}
            value={formState.lastName}
          />
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
          <FormInput
            id="cPassword"
            inputType="password"
            labelName="Confirm Password"
            onChangeHandler={inputHandler}
            placeholderText=""
            isRequired={true}
            value={formState.cPassword}
          />
          <SimpleButton type="submit" btnText="Signup" btnHandler={() => {}} />
        </SectionRight>
      </AuthContainerStyles>
    </>
  );
};

export default SignUp;
