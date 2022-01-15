import React, { useState } from "react";
import ForgotPassword from "../ForgotPassword";
import axios from "axios";

import "./style.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendData = () => {
    const response = axios.post("/login", JSON.stringify(formData));
    return response;
  };

  const onChange = (e, fieldValue) => {
    setFormData({ ...formData, [fieldValue]: e.target.value });
  };

  const closeModal = () => setIsModalOpen(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await sendData();
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <>
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

        <p id="forgot-password" onClick={() => setIsModalOpen(true)}>
          Forgot your password? Create a new one here
        </p>

        <button
          className="submit-button"
          onClick={!isLoading ? onSubmit : () => {}}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      {isModalOpen && <ForgotPassword closeModal={closeModal} />}
    </>
  );
};

export default Form;
