import React from "react";
import { useState } from "react";
import { Button } from "antd";
import { Input } from "antd";
import "./adminlogin.css";

function AdminLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <br />
        <Input
          className="loginInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <br />
        <Input
          className="loginInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button onClick={handleSubmit} type="primary">
        Login
      </Button>
    </form>
  );
}

export default AdminLogin;
