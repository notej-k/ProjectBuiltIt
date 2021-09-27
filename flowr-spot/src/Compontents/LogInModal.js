import React from "react";
import "../Style/style.css";

function LogInModal({ changeState }) {
  
  return (
    <div className="modalBackground">
      <div className="createAccountModalContainer2">
        <div className="closeButton">
          {" "}
          <button
            onClick={() => {
              changeState(false);
            }}
          >
            x
          </button>
        </div>
        <div className="modalContainer">
          <h2 className="accountHeader">Welcome Back</h2>
          <form className="form" method="POST">
            <div className="emailWrapper">
              <p className="inputDescriberBottom">Email</p>
            <div className="emailInput">
              <input type="text" name="email" className="inputText"/>
            </div>
            </div>
            <div className="passwordWrapper">
            <p className="inputDescriberBottom">Password</p>
            <label className="passwordInput">
              <input type="password" name="password" className="inputText" />
            </label>
            </div>
            <div className="submitForm">
              <input type="submit" value="Create Account" className="submitButton"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInModal;
