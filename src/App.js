import React from "react";
import logo from "./logo.svg";
import "./App.css";

import data from "./kelley_family.json";

import SiblingButton from "./components/SiblingButton";

function App() {
  const logged_in = true; // imagine this is computed somehow, from having actually logged in or not

  if (!logged_in) {
    return (
      <div>
        <p>Please log in first</p>
      </div>
    );
  }

  return (
    <div>
      <div className="toolbar" style={{ display: "flex" }}>
        Name of website
        <div style={{ flex: 1 }}></div>
        <SiblingButton name={"Logout"} />
      </div>
      <ol>
        {data.map((name) => {
          return (
            <li>
              <SiblingButton name={name} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
