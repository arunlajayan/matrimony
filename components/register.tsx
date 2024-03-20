"use client";

import React from "react";
import RegisterBtn from "./registerBtn";
import { useFormState } from "react-dom";
import { signupApi } from "@/actions/api/dataget";
const initialState = {
  message: "",
  errors: null,
};

export default function Register() {
  // function sellYourItemAction(prevState: any, formData: FormData) {
  //   console.log({ prevState });
  //   console.log(formData.get("email"));
  //   console.log(formData.get("phone"));
  //   console.log(formData.get("profile"));
  //   console.log(formData.get("password"));
  //   console.log(state?.error);
  // }
  
  const sellYourItemAction = (prevState: any, formData: FormData) => {
    const email = formData.get('email')
    const username = formData.get('username')
      const password =formData.get('password')
    signupApi({ "username": username, "email": email, "password": password })
    console.log(state)
  }
  const [state, formAction] = useFormState<any>(
    sellYourItemAction as any,
    initialState
  );

  return (
    <form className="dh-mainform" action={formAction}>
      <div className="newform-position">
        <div className="createprofile-text">Create a Matrimony Profile</div>
        <div className="dh-frmbdr">
          <h1 className="register-title-textnew">Find your perfect match</h1>

          <div className="-mt-10">
            <div className="">
              <input
                name="email"
                type="text"
                placeholder="email"
                className="shadow-md h-8 rounded-md w-full radius border mt-12 border-black"
                required
              />

              <input
                name="username"
                type="type"
                placeholder="username"
                className="shadow-md h-8 rounded-md w-full border mt-2 border-black"
                required
              />

              <input
                name="password"
                type="password"
                placeholder="password"
                className="shadow-md h-8 rounded-md w-full border mt-2 border-black"
                required
              />

              <select
                name="profile"
                required
                className="shadow-md h-8 w-full border mt-2 rounded-md border-black"
              >
                <option>Select an option</option>
                <option value="1">myself</option>
                <option value="2">parent</option>
                <option value="3">cousin</option>
              </select>
            </div>
          </div>
          <RegisterBtn />
        </div>
      </div>
    </form>
  );
}
