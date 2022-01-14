import React, { useState } from "react";
import "./style.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChange = (e, fieldValue) => {
    setFormData({ ...formData, [fieldValue]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <h2>Login</h2>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => onChange(e, "username")}
      />

      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => onChange(e, "password")}
      />

      <p id="forgot-password">Forgot your password? Create a new one here</p>

      <button onClick={onSubmit}>Login</button>
    </form>
  );
};

export default Form;
