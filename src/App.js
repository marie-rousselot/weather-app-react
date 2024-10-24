import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/111105-marie-rousselot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marie Rousselot
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/marie-rousselot/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on
        <a
          href="https://marie-weather-app-react.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}
