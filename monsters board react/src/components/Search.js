import React, { useState } from "react";
import "./search.css";

function Search({ placeholder, handleChange }) {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
