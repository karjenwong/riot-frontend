import React, { useState } from "react";
import axios from "axios";

import Champion from "./Champion";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ChampionSearch({level, setLevel}) {
  const [info, setinfo] = useState(null);
  const [name, setName] = useState("");
  const [valid, setValid] = useState(true);
  const onSubmit = (e) => {
    axios
      .post("http://localhost:8080/riot/champions", { name: name })
      .then(({ data }) => {
        if (data.name !== "Error") {
          setinfo(data);
          setValid(true);
          setName("");
        } else setValid(false);
      })
      .catch((error) => console.log(error));
  };

  const press = (e) => (e.charCode === 13 ? onSubmit() : null);

  const formBasic = (
    <div>
      <Form.Group className="flex">
        <Form.Control
          type="text"
          placeholder="Enter Champion Name"
          onChange={(e) => setName(e.target.value)}
          onKeyPress={press}
          value={name}
        />
        <Button type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Group>
      {!valid ? <a>Champion Not Found.</a> : ""}
    </div>
  );

  return (
    <section className="ChampionSearch">
      <div>
        {formBasic}
        {info ? <Champion info={info} level={level} setLevel={setLevel}/> : ""}
      </div>
    </section>
  );
}

export default ChampionSearch;
