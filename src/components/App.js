import React, { useState } from "react";
import "../styles/App.css";
import signUpFormValidation from "../utils/validation";

const App = () => {
  const formdata = {
    name: "",
    email: "",
    password: ""
  };
  const [data, setData] = useState(formdata);

  const changeName = (e) => {
    setData({
      name: e.target.value
    });
  };

  const changeEmail = (e) => {
    setData({
      email: e.target.value
    });
  };
  const changePassword = (e) => {
    setData({
      password: e.target.value
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUpFormValidation(data);
        }}
      >
        <label>Name</label>
        <input type="text" id="name" onChange={changeName} value={data.name} />

        <label>email</label>
        <input type="email" id="email" onChange={changeEmail} />
        <label>password</label>
        <input type="password" id="password" onChange={changePassword} />
        <label>checkbox</label>
        <input type="checkbox" id="consent" />
        <label>Sign up</label>
        <input type="submit" value="Signup" />
      </form>
    </>
  );
};

export default App;
