import React from "react";

function SearchBar({setSearchTerm}){
    return (
        <input
        type="text"
        placeholder="Search expenses..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-1 text-lg border border-gray-300 rounded"
       />
    );

}

export default SearchBar;
