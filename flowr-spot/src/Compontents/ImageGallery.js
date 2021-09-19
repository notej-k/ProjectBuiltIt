import React from "react";
import ImageComponent from "./ImageComponent";

function ImageGallery(){
    let gallery = [];

    for(let i = 0; i < 8; i++){
      gallery.push(<ImageComponent key={i}></ImageComponent>)
    }

  return(
    <div className="imageGallery">
      {gallery}
    </div>
  )
}

export default ImageGallery;