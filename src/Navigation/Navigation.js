import React from "react";
//Impoorting navbar component
import Navbar from './Navbar'
//adding searchbar
const Navigation = () => {

  return (
    <div>
      <Navbar/>
      <form id="searchBox">
        <input type="text" id="keyword" placeholder="Enter a keyword to search"/>
        <input type="button" value="Search" onClick="search();"/>
      </form>
    </div>
    );
};

export default Navigation;