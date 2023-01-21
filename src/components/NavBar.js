import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkgray"
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkgray"
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkgray"
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkgray"
        }}
      >
        Actors
      </NavLink>
    </div>
  )
}

export default NavBar;
