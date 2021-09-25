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
        console.log('json: ', json);

        setGalleryImages(json.flowers);

      } catch (err) {
        console.log("errrrrr:", err);
      }
    })();
  }, []);

  console.log("gal",galleryImages)

  if(!galleryImages) {
    return <div>no data</div>
  }

  const img = galleryImages[0];
  console.log(img)

  return (
    <div className="imageGallery">


       {galleryImages.map((img) =>  (
          <div>
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
