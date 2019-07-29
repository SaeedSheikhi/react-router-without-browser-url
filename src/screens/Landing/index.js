import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Link to="/terms">terms</Link>
      <Link to="/about">about</Link>
    </div>
  );
}

export default Landing;
