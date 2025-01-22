import React from "react";
import {NavLink} from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <NavLink to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "inactive"
        }
      >
        Home
      </NavLink>
      <NavLink to="/chips"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "inactive"
        }
      >
        Chips
      </NavLink>
      <NavLink to="/soda"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "inactive"
        }
      >
        Soda
      </NavLink>
      <NavLink to="/candy"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "inactive"
        }
      >
        Candy
      </NavLink>
    </nav>
  );
};

export default NavBar;