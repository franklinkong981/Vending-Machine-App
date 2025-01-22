import React from "react";
import {Link} from "react-router-dom";

const Chips = () => {
  return (
    <div className="Chips">
      <h1 className="Chips-header">You've selected chips!</h1>
      <button><Link to="/">Back to Vending Machine</Link></button>
    </div>
  );
};

export default Chips;