import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import VendingMachine from "./VendingMachine.jsx";
import Chips from "./Chips.jsx";
import Soda from "./Soda.jsx";
import Candy from "./Candy.jsx";

function App() {

  return (
   <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/soda" element={<Soda/>} />
        <Route path="/candy" element={<Candy/>} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
