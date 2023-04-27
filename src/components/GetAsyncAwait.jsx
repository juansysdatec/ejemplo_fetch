import { useState } from "react";
import { GET_USER } from "../utils/constants";

export default function GetAsyncAwait() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useState(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(GET_USER);
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    getData();
  });

  if (loading) return <p>Cargando...</p>;

  if (error)
    return (
      <p>
        Hubo un error
        {error.message}
      </p>
    );

  return (
    <>
      <h1>Get con Async Await</h1>
      <button>
        <a href="/">Volver</a>
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {data ? (
          data.users?.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.website}</p>
              </div>
            );
          })
        ) : (
          <p>No hay datos</p>
        )}
      </div>
    </>
  );
}
