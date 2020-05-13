import React,{useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ChampionSearch from "./Components/ChampionSearch";

function App() {
  let[level, setLevel]= useState(1)
  return (
    <div className="main">
      <ChampionSearch level={level} setLevel={setLevel}/>
      <ChampionSearch level={level} setLevel={setLevel}/>
    </div>
  );
}

export default App;
