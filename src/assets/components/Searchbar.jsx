import React from "react";

function SearchBar({setSearchTerm}){
    return (
        <input
        type="text"
        placeholder="Search expenses..."
        onChange={(e) => setSearchTerm(e.target.value)}
    
       />
    );

}

export default SearchBar;
