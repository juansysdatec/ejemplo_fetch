import { useEffect, useState } from "react";
import { GET_USER } from "../utils/constants";

export default function GetThen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      fetch(GET_USER)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getData();
  }, []);

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
      <h1>Get con Then</h1>
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
