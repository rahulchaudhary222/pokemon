import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [inputval, setInputVal] = useState("");
  const [filtered, setFiltered] = useState("");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151%27")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);
  const finder = () => {
    let filtered = data.filter((e) => e.name.includes(inputval));
    console.log(filtered);
    return filtered;
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="nav-left ">
          <input
            placeholder="Search"
            value={inputval}
            onChange={(event) => {
              setInputVal(event.target.value);
              console.log(inputval);
            }}
          />
          <button
            onClick={() => {
              setFiltered(filtered);
              finder();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="card-wrapper">
        {data.map((e) =>
          filtered === e.name || !filtered ? (
            <div className="card">
              <h1>{e.name}</h1>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
