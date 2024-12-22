import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>ATT KS</h1>
      <nav>
        <NavLink to="/" className={"home"}>
          Home
        </NavLink>
        <NavLink to="/ask" activeClassName="active" className={"ask"}>
          Ask Question
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
