import React from "react";
import ImageComponent from "./ImageComponent";
import image from '../pl-image.png'

function ImageGallery(){
    let gallery = [];

    for(let i = 0; i < 8; i++){
      gallery.push(<ImageComponent url={image}></ImageComponent>)
    }

  return(
    <div className="imageGallery">
      {gallery}
    </div>
  )
}

export default ImageGallery;