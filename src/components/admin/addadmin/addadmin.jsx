import React from "react";
import { useState } from "react";
import { Button } from "antd";
import { Input } from "antd";
import "./addadmin.css";
const axios = require("axios");

function AddAdmin(props) {
  const [fname, setFirstName] = useState("");
  const [sname, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("firstname", fname);
    console.log("secondname", sname);
    console.log("email", email);
    console.log("password", password);

    axios
      .post(
        "https://jeevanthariyasewana.herokuapp.com/Dashboard/admin/addadmin",
        {
          firstname: fname,
          secondname: sname,
          email: email,
          password: password,
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Firstname</label> added for test
        <br />
        <Input
          className="regInput"
          value={fname}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Secondname</label>
        <br />
        <Input
          className="regInput"
          value={sname}
          onChange={(e) => setSecondName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <br />
        <Input
          className="regInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <br />
        <Input
          className="regInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button onClick={handleSubmit} type="primary">
        Register Admin
      </Button>
    </form>
  );
}

export default AddAdmin;
