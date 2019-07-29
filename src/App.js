import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Terms from "./screens/Terms";
import About from "./screens/About";
import Landing from "./screens/Landing";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Landing} />
      <Route path="/terms" component={Terms} />
      <Route path="/about" component={About} />
    </React.Fragment>
  );
}

export default App;
