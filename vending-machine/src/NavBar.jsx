import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <NavLink to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink to="/chips"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Chips
      </NavLink>
      <NavLink to="/soda"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Soda
      </NavLink>
      <NavLink to="/candy"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Candy
      </NavLink>
    </nav>
  );
};

export default NavBar;