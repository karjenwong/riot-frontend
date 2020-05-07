import React, { useState } from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Champion from "./Components/Champion";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [info, setinfo] = useState(null);
  const [name, setName] = useState(null);

  const onSubmit = (e) => {
    axios
      .post("http://localhost:8080/riot/champions", { name: name })
      .then(function ({ data }) {
        setinfo(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

const press = (e)=> {
  if(e.charCode===13) onSubmit()
}

  return (
    <div className="App">
      <section className="test">
        <div>
          Do Something{" "}
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Normal text"
              onChange={(e) => setName(e.target.value)}
              onKeyPress={press}
            />
            <Button type="submit" onSubmit={onSubmit} >
              Button
            </Button>
          </Form.Group>
        </div>
        <div>{name}</div>

        <div>{info ? <Champion info={info} /> : "empty"}</div>
      </section>
    </div>
  );
}

export default App;
