import React from "react";
import Modal from "../Modal";

const ForgotPassword = ({ closeModal }) => {
  return (
    <Modal>
      <div className="modal-top">
        <h3>Forgot your password?</h3>
        <span onClick={closeModal}>X</span>
      </div>
      <p>
        Enter your email or username. We'll email instructions on how to reset
        your password
      </p>
      <div className="modal-main">
        <input type="text" />
        <button className="submit-button">Submit</button>
      </div>
    </Modal>
  );
};

export default ForgotPassword;
