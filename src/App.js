import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch(":8080/deploy").then((response) => {
      response.text().then((data) => {
        setmsg(data);
      });
    });
  });
  const [msg, setmsg] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{msg}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
