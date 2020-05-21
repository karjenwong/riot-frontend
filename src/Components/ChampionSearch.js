import React, { useState } from "react";
import axios from "axios";

import Champion from "./Champion";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const url =
  "http://ec2-34-217-208-140.us-west-2.compute.amazonaws.com:8080/riot";

function ChampionSearch(props) {
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
      .post(`${url}/champions`, {
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
      .post(`${url}/championslist`, { name: "filler" })
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
          placeholder="Eg. Aatrox"
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
            <ul className={`listHeight ${champlist.length ? "" : "none"}`}>
              {filterList}
            </ul>
          </div>
        </div>

        {info && <Champion info={info} />}
      </div>
    </section>
  );
}

export default ChampionSearch;
