import React from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%),url("${({ image }) => image}");
  width: 280px;
  height: 350px;
  background-size: cover;
  margin-top: 30px;
  margin-right: 60px;
`;

function ImageComponent({url, name, latinName, sightings}) {

    return (
      <ImageDiv image={url}>
        <div className="flowerType">
          <div className="starButtonWrapper"><div className="starButton" /></div>
          <div className="detailWrapper">
          <div className="flowerType">{name}</div>
          <div className="flowerDescription">{latinName}</div>
          <div className="sightingsButton">{`${sightings} Sightings`} </div>
          </div>
        </div>
      </ImageDiv>
    );
}

export default ImageComponent;
