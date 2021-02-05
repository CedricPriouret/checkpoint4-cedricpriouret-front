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

  const [newCountry, setNewCountry] = useState("");

  const [userList, setUserList] = useState([]);

  /* AJOUTER UN UTILISATEUR */

  const addUser = () => {
    axios
      .post("http://localhost:3001/create", {
        firstname: firstname,
        lastname: lastname,
        age: age,
        country: country,
        mail: mail,
      })
      .then(() => {
        setUserList([
          ...userList,
          {
            firstname: firstname,
            lastname: lastname,
            age: age,
            country: country,
            mail: mail,
          },
        ]);
      });
  };

  /* OBTENIR LA LISTE DES UTILISATEURS */

  const getUser = () => {
    axios.get("http://localhost:3001/user").then((response) => {
      setUserList(response.data);
    });
  };

  /* METTRE A JOUR LA REGION D'UN UTILISATEUR */

  const updateCountryUser = (id) => {
    axios
      .put("http://localhost:3001/update", { country: newCountry, id: id })
      .then((response) => {
        setUserList(
          userList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  firstname: val.firstname,
                  lastname: val.lastname,
                  age: val.age,
                  country: newCountry,
                  mail: val.mail,
                }
              : val;
          })
        );
      });
  };

  /* SUPPRIMER UN UTILISATEUR */

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setUserList(
        userList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="container-create-user">
      <h2>Ajouter un utilisateur</h2>
      <hr />
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
      <hr />
      <div className="show-users">
        <h2>Liste des utilisateurs</h2>
        <div className="container-user">
          <button type="button" className="btn-user" onClick={getUser}>
            Voir les utilisateurs
          </button>
          {userList.map((val, key) => {
            return (
              <div className="container-list-user">
                <div className="list-user">
                  <h3>Nom: {val.firstname}</h3>
                  <h3>Prénom: {val.lastname}</h3>
                  <h3>Age: {val.age}</h3>
                  <h3>Région: {val.country}</h3>
                  <h3>Mail: {val.mail}</h3>
                </div>
                <div className="update-delete-user">
                  <input
                    type="text"
                    placeholder="Autre region..."
                    onChange={(event) => {
                      setNewCountry(event.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      updateCountryUser(val.id);
                    }}
                  >
                    Valider
                  </button>
                  <button
                    onClick={() => {
                      deleteUser(val.id);
                    }}
                  >
                    Supprimer l'utilisateur
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Users;
