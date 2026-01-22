import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">EventHub</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/events" activeClassName="active">Events</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
