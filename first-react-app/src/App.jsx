import { use, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [noCount, setNoCount] = useState(100);

  function decreaseValue() {
    setNoCount(noCount - 1);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button
          style={{
            marginLeft: "10px",
            backgroundColor: "red",
            border: "5px solid blue",
          }}
          // onClick={decreaseValue}
          onMouseLeave={() => decreaseValue()}
        >
          noCount is {noCount}
        </button>
      </div>
    </>
  );
}

export default App;
