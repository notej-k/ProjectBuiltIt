import React from "react";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "../Style/style.css";

function LogInModal({ changeState }) {

  const succesToast = ()=>{
    toast("Congratulations! You have successfully logged into FlowrSpot!",{
    position: toast.POSITION.TOP_RIGHT
    });
  }
  
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
              <button type="button" className="submitButton" onClick={succesToast}>Login to your Account</button>
              <ToastContainer></ToastContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInModal;
