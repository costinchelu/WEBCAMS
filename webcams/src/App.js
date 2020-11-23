import React, { Component } from "react";
import "./App.css"
import RegionList from "./components/RegionList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegionList/>
      </div>
    );
  }
}

export default App;
