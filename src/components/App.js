import React, { useEffect, useRef, useState } from "react";
import "../styles/App.css";
import "./utils/signUpFormValidation";
import { email, name, password } from "./utils/signUpFormValidation";

const App = () => {
  const [formData, setFormdata] = useState([]);

  const handleChange = (e) => {
    console.log("e", e.target.value, e.target.name);
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <div>Name is:{name}</div>

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div>Email is:{email}</div>

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div>Password is:{password}</div>

        <label for="consent"></label>
        <input type="checkbox" id="consent" />
        <label for="submit"></label>
        <button type="submit" id="submit">
          submit
        </button>
      </form>
    </>
  );
};

export default App;
