import React, { useState } from "react";
import Form from "../Form";
import ExchangeRate from '../ExchangeRate';
import "./style.scss";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <div className="login-wrapper">
        <div className="ortex-wrapper">
          <span id="ortex">ORTEX</span>
          <p onClick={() => setIsModalOpen(true)}>
            Check EUR/USD exchange rate
          </p>
        </div>
        <Form />
      </div>
      {isModalOpen && <ExchangeRate closeModal={closeModal}/>}
    </main>
  );
};

export default Login;
