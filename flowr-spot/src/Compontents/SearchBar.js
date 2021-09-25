import React from 'react';
import '../Style/style.css'

const SearchBar = () => (
  <div className="searchBar">
    <form action="/" method="get">
      <input
          type="text"
          placeholder="Looking for something specific?"
          name="inputData" 
          className="inputBar"
      />
      <button  className="searchButton"></button>
   </form>
  </div>
);

export default SearchBar;