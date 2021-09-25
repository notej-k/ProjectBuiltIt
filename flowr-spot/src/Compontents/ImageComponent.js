import React from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
  background-image: url("${({ image }) => image}");
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
