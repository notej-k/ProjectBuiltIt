import React from "react";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../Style/style.css";

function CreateAccountModal({ changeState }) {

  const succesToast = ()=>{
    toast("Congratulations! You have successfully signed up for FlowrSpot!",{
    position: toast.POSITION.TOP_RIGHT
    });
  }

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
          <form className="form">
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
              <button type="button" className="submitButton" onClick={succesToast}>Create Account</button>
              <ToastContainer></ToastContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountModal;
