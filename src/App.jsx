import "./App.css";
import GetAsyncAwait from "./components/GetAsyncAwait";
import GetThen from "./components/GetThen";
import PostAsyncAwait from "./components/PostAsyncAwait";
import PostThen from "./components/PostThen";

function App() {

  const { pathname: path } = window.location;

  if (path === "/" || path === undefined) {
    return (
      <>
        <h1>Hola</h1>
        <button
          onClick={() => {
            window.location.href = "/get-async-await";
          }}
        >
          Ir a ejemplo de get con async await
        </button>

        <button
          onClick={() => {
            window.location.href = "/get-then";
          }}
        >
          Ir a ejemplo de get con then
        </button>

        <button
          onClick={() => {
            window.location.href = "/post-async-await";
          }}
        >
          Ir a ejemplo de post con async await
        </button>

        <button
          onClick={() => {
            window.location.href = "/post-then";
          }}
        >
          Ir a ejemplo de post con then
        </button>
        <div>
          <h2>Extra</h2>
          
        </div>
      </>
    );
  }

  if (path === "/get-async-await") {
    return <GetAsyncAwait />;
  }

  if (path === "/get-then") {
    return <GetThen />;
  }

  if (path === "/post-async-await") {
    return <PostAsyncAwait />;
  }

  if (path === "/post-then") {
    return <PostThen />;
  }

  return <h1>404</h1>;
}

export default App;
