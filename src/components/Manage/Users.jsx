import React from "react";
import "./css/style.css";
import { useState } from "react";
import axios from "axios";

function Users() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [mail, setMail] = useState("");

  const addUser = () => {
    axios
      .post("http://localhost:3001/create", {
        firstname: firstname,
        lastname: lastname,
        age: age,
        country: country,
        mail: mail,
      })
      .then(() => console.log("success"));
  };

  return (
    <div className="container-user">
      <div className="information">
        <label>Nom:</label>
        <input
          type="text"
          onChange={(event) => {
            setFirstname(event.target.value);
          }}
        />
        <label>Prénom:</label>
        <input
          type="text"
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Région:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Mail:</label>
        <input
          type="email"
          onChange={(event) => {
            setMail(event.target.value);
          }}
        />
        <button type="button" className="btn-user" onClick={addUser}>
          Ajouter un utilisateur
        </button>
      </div>
      <div className="show-users">
        <hr />
        <button type="button" className="btn-user">
          Voir les utilisateurs
        </button>
      </div>
    </div>
  );
}

export default Users;
