import React from "react";

function SearchBar({setSearchTerm}){
    return (
        <input
        type="text"
        placeholder="Search expenses..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
            width: "98%",
            padding: "10px",
            marginBottom: "3px",
            fontSize: "16px",
        }}
    
       />
    );

}

export default SearchBar;
