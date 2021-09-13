import React from 'react';
import HeaderItem from '../Compontents/headerItem';

function HeaderItems(){
  return(
    <div className="headerItems">
      <HeaderItem name = "Flowers"/>
      <HeaderItem name = "Latest Sightings"/>
      <HeaderItem name = "Favorites"/>
      <div className="loginButton">
        <HeaderItem name = "Login" />
      </div>
        <button className="newAccButton">New Account</button>
    </div>
  )
}

export default HeaderItems;