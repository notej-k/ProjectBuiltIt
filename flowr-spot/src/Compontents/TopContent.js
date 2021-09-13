import React from 'react';
import SearchBar from './SearchBar';
import '../Style/style.css'

function TopContent(){

  return(
    <div className="topContent">
      <div className="bgImage">
        <h1 className="topText">Discover flowers around you</h1>
        <h2 className="midText">Explore between more than 8.427 sightings</h2>
        <SearchBar />
      </div>
    </div>
  )
}

export default TopContent;