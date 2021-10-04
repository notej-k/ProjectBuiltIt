import ImageComponent from "./ImageComponent";
import React, { useState, useEffect } from "react";

function ImageGallery() {
  const URL = "https://flowrspot-api.herokuapp.com//api/v1/flowers";
  const [galleryImages, setGalleryImages] = useState(null);

  useEffect(() => {
    (async () => {
      const options = {
        headers: {
          'content-type': 'application/json',
        },
        method: 'GET',
      };

      try {
        const result = await fetch(URL, options);
        const json = await result.json();
        setGalleryImages(json.flowers);

      } catch (err) {
        console.log("errrrrr:", err);
      }
    })();
  }, []);

  if(!galleryImages) {
    return <div>no data</div>
  }

  return (
    <div className="imageGallery">


       {galleryImages.map((img) =>  (
          <div key={img.id}>
          <ImageComponent
            url={img.profile_picture}
            name={img.name}
            latinName={img.latin_name}
            sightings={img.sightings}
          />
          </div>
        )
      )} 
    </div>
  );
}

export default ImageGallery;
