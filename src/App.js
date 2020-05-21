import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import ChampionSearch from "./Components/ChampionSearch";

function App() {
  const [numberOfChampions, setNumberOfChampions] = useState([]);
  const [id, setId] = useState(0);
  const [filter, setFilter] = useState([]);

  const add = () => {
    const temp = [...numberOfChampions, <ChampionSearch uid={id} />];
    setNumberOfChampions(temp);
    setId(id + 1);
  };

  return (
    <>
      <Button onClick={add}>+</Button>
      <div className="main">{numberOfChampions}</div>
    </>
  );
}

export default App;
