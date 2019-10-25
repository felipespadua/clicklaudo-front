import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Forms from "./Forms";
import SearchAppBar from "./Navbar";
import SimpleExpansionPanel from "./Expansion";

const App = () => {
  return (
    <div className="App">
      {SearchAppBar()}
      {SimpleExpansionPanel()}
    </div>
  );
};

export default App;
