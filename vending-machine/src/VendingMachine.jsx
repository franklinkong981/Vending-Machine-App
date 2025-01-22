import React from "react";
import {Link} from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1 className="VendingMachine-welcome">Welcome to the Vending Machine</h1>
      <h2 className="VendingMachine-instructions">Please select a snack below</h2>
      <div className="VendingMachine-links">
        <button><Link to="/chips">Chips</Link></button>
        <button><Link to="/soda">Soda</Link></button>
        <button><Link to="/candy">Candy</Link></button>
      </div>
    </div>
  );
};

export default VendingMachine;