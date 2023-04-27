import { useState } from "react";
import { ADD_USER } from "../utils/constants";

export default function PostThen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      age,
    };

    setLoading(true);

    fetch(ADD_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => window.alert(`user ${json.id} created!`))
      .catch((error) => window.alert(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h1>Post con Then</h1>
      <button>
        <a href="/">Volver</a>
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Nombre</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Apellido</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="age">Edad</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Enviar
        </button>
      </form>
    </div>
  );
}
