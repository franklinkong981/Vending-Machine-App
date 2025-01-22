import React from "react";
import {Link} from "react-router-dom";

import "./Soda.css";

const Soda = () => {
  return (
    <div className="Soda">
      <h1 className="Soda-header">You've selected soda!</h1>
      <button><Link to="/">Back to Vending Machine</Link></button>
    </div>
  );
};

export default Soda;