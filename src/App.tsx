import React from "react";
import "./App.css";

import MsgSide from "./components/MsgSide";
import Road from "./components/Road";

function App() {
  return (
    <>
      <div className="myApp">
        <div className="App">
          <MsgSide></MsgSide>
        </div>
        <Road></Road>
      </div>
      <div className="Setup">Hello</div>
      <div className="Tip">Use Phone</div>
    </>
  );
}

export default App;
