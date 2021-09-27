import React from "react";
import "../Style/style.css";

function CreateAccountModal({ changeState }) {
  return (
    <div className="modalBackground">
      <div className="createAccountModalContainer">
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
          <h2 className="accountHeader">Create an Account</h2>
          <form className="form" method="POST">
            <div className="nameAndLastName">
              <div className="firstNameWrapper">
                <div>
                  <p className = "inputDescriber">First Name</p>
                </div>
              <label className="firstNameInput">
                <input type="text" name="name" className="inputText"/>
              </label>
              </div>
              <div className="lastNameWrapper">
                <div>
                  <p className="inputDescriber"> Last Name</p>
                </div>
              <label className="lastNameInput">
                <input type="text" name="lastName" className="inputText"/>
              </label>

              </div>
            </div>

            <div className="DOBWrapper">
            <div>
                  <p className="inputDescriberBottom">Date of Birth</p>
                </div>
            <label className="DOBInput">
              <input type="text" name="DOB" className="inputText" />
            </label>
            </div>
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

export default CreateAccountModal;
