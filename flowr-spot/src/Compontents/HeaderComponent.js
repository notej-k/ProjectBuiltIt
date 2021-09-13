import React from 'react';
import logo from '../Vector.png'
import flowers from '../Flowers.png'
import  '../Style/style.css'

function Logo(){
  return (
    <div className="header">
     <div className="flowerLogo">
        <img src={logo} alt="" />
      </div>
      <div className="flowersText">
        <img src={flowers} alt=""></img>
      </div>
    </div>
    
  );
}

export default Logo;