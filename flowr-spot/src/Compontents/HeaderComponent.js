import React from 'react';
import logo from '../Vector.png'
import flowers from '../Flowers.png'
import  '../Style/style.css'
import Headeritems from '../Compontents/HeaderItems';

function Logo(){
  return (
    <div className="header">
     <div className="flowerLogo">
        <img src={logo} alt="" />
      </div>
      <div className="flowersText">
        <img src={flowers} alt=""></img>
      </div>
      <div className="headerItems">
        <Headeritems></Headeritems>
      </div>
    </div>
    
  );
}

export default Logo;