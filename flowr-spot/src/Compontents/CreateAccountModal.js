import React from "react";
import "../Style/style.css";

function CreateAccountModal({changeState}) {


  return (
    <div className="modalBackground">
      <div className="createAccountModalContainer">
      <div className="closeButton"> <button onClick={()=>{
            changeState(false)
      }}>x</button></div>
        <div className="modalContainer">
          <h2 className="accountHeader">Create an Account</h2>
          <form className="form" method="POST">
            <div className="nameAndLastName">
              <label className="firstNameInput">
                <input type="text" name="name" />
              </label>
              <label className="lastNameInput">
                <input type="text" name="lastName" />
              </label>
            </div>
            <label className="DOBInput">
              <input type="text" name="DOB" />
            </label>
            <label className="emailInput">
              <input type="text" name="email" />
            </label>
            <label className="passwordInput">
              <input type="password" name="password" />
            </label>
            <div className="submitForm">
              <input type="submit" value="Create Account" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
  

export default CreateAccountModal;
