import React from "react";

import MsgSide from "./components/MsgSide";
import Road from "./components/Road";

import "./App.css";

function App() {
  return (
    <>
      <div className="myApp">
        <div className="App">
          <MsgSide></MsgSide>
        </div>
        <Road />
      </div>
      <div className="Setup">Hello</div>
      <div className="Tip">Use Phone</div>
    </>
  );
}

export default App;
