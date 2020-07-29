import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Search from "./components/Search";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setState(data));
  });

  const [search, setSearch] = useState("");
  const filtered = state.filter((monster) =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <h1>Monsters Board</h1>
      <Search
        placeholder="search monsters"
        handleChange={(e) => setSearch(e.target.value)}
      />

      <Card monsters={filtered}></Card>
      {/* <Hook5 /> */}
    </div>
  );
}

export default App;
