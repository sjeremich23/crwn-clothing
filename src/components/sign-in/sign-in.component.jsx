import React, { useState } from "react";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    setSignIn({
      email: "",
      password: ""
    });
  };

  const handleChange = e => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={signIn.email}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={signIn.password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton value="Submit Form">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
