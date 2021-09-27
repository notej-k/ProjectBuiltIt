import React, {useState} from "react";
import HeaderItem from "../Compontents/headerItem";
import CreateAccountModal from "./CreateAccountModal";
import LogInModal from "./LogInModal";

function HeaderItems() {
  let [newAccountVisible, setNewAccountVisible] = useState(false);
  let [logInVisible, setLoginVisible] = useState(false);

  return (
    <div className="headerItems">
      <HeaderItem name="Flowers" />
      <HeaderItem name="Latest Sightings" />
      <HeaderItem name="Favorites" />
      <button className="logInBtn" onClick={()=>{
        setLoginVisible(true)
      }}>Login</button>
      <button
        className="newAccButton"
        onClick={() => {
          setNewAccountVisible(true);
        }}
      >
        New Account
      </button>
      <div>{newAccountVisible ? <CreateAccountModal changeState={data => setNewAccountVisible(data)} /> : <div></div>} </div>
      <div>{logInVisible ? <LogInModal changeState={data => setLoginVisible(data)} /> : <div></div>} </div>
    </div>
  );
}

export default HeaderItems;
