import React, { useState } from "react";
import axios from "axios";

import Champion from "./Champion";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ChampionSearch({ level, setLevel }) {
  const [info, setinfo] = useState(null);
  const [name, setName] = useState("");
  const [valid, setValid] = useState(true);
  const [champions, setChampions] = useState([]);
  const [champlist, setChampList] = useState([]);

  const onSubmit = (e) => {
    let closestChampName = champions.find((x) =>
      x.toLowerCase().includes(name.toLowerCase())
    );
    axios
      .post("http://localhost:8080/riot/champions", {
        name: champions.includes(e) ? e : closestChampName,
      })
      .then(({ data }) => {
        if (data.name !== "Error") {
          setinfo(data);
          setValid(true);
          setName("");
          setChampList([]);
        } else setValid(false);
      })
      .catch((error) => console.log(error));
  };

  const press = (e) => (e.charCode === 13 ? onSubmit() : null);
  const onTyping = (e) => {
    setName(e.target.value);
    setChampList(
      champions.filter((x) =>
        x.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  if (!champions.length) {
    axios
      .post("http://localhost:8080/riot/championslist", { name: "filler" })
      .then(({ data }) => setChampions(data))
      .catch((error) => console.log(error));
  }
  let filterList = (champlist || []).map((x, i) => (
    <li key={i} className="filterItem" onClick={(e) => onSubmit(x)}>
      {x}
    </li>
  ));
  const search = (
    <div>
      <Form.Group className="flex">
        <Form.Control
          type="text"
          placeholder="Enter Champion Name"
          onChange={onTyping}
          onKeyPress={press}
          value={name}
        />
        <Button type="button" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Group>
      {!valid ? <div>Champion Not Found.</div> : ""}
    </div>
  );

  return (
    <section className="ChampionSearch">
      <div>
        <div className="search">
          {search}
          <div className="filterlist">
            <ul>{filterList}</ul>
          </div>
        </div>

        {info ? <Champion info={info} level={level} setLevel={setLevel} /> : ""}
      </div>
    </section>
  );
}

export default ChampionSearch;
