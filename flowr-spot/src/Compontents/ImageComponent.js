import React from 'react';

function ImageComponent(props){
    return(
      <div className="singleImage">
        <img src={props.url} alt=""></img>
        <p>TEXT HERE</p>
      </div>
    );  
}

export default ImageComponent;