import React from "react";
import {Link} from "react-router-dom";

import "./Candy.css";

const Candy = () => {
  return (
    <div className="Candy">
      <h1 className="Candy-header">You've selected candy!</h1>
      <button><Link to="/">Back to Vending Machine</Link></button>
    </div>
  );
};

export default Candy;