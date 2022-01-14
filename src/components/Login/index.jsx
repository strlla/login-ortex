import React from "react";
import Form from "../Form";
import "./style.scss";

const Login = () => {
  return (
    <main>
      <div className="login-wrapper">
        <div className="ortex-wrapper">
          <span id="ortex">ORTEX</span>
          <p>Check EUR/USD exchange rate</p>
        </div>
        <Form />
      </div>
    </main>
  );
};

export default Login;
