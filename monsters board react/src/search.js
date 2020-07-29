import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hook3 from "./Hook3";
import { render } from "@testing-library/react";
//import Learn from "./Learn";
const movie = [
  {
    title: "The Old Guard",
    points: 4,
    id: "mov1",
  },
  {
    title: "django",
    pounts: 5,
    id: "mov2",
  },
  {
    title: "equalizer",
    points: 6,
    id: "mov3",
  },
];
//movie.map((item) => console.log(item.title));
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = movie.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
