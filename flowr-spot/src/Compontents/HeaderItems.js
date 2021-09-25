import React, {useState} from "react";
import HeaderItem from "../Compontents/headerItem";
import CreateAccountModal from "./CreateAccountModal";

function HeaderItems() {
  let [LogInVisibility, setLogInVisibility] = useState(false);
  return (
    <div className="headerItems">
      <HeaderItem name="Flowers" />
      <HeaderItem name="Latest Sightings" />
      <HeaderItem name="Favorites" />
      <div className="loginButton">
        <HeaderItem name="Login" />
      </div>
      <button
        className="newAccButton"
        onClick={() => {
          setLogInVisibility(true);
        }}
      >
        New Account
      </button>
      <div>{LogInVisibility ? <CreateAccountModal changeState={LogInVisibility => setLogInVisibility(LogInVisibility)} /> : <div></div>} </div>
    </div>
  );
}

export default HeaderItems;
