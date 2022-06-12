import React, { useState } from "react";
import "../styles/App.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none"
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none"
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  const handleCheck = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label" id="name">
          Name
        </label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />

        <label className="label" id="email">
          Email
        </label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label" id="password">
          Password
        </label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />
        <label className="label" id="consent">
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />
        </label>

        <button onClick={handleSubmit} className="btn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
