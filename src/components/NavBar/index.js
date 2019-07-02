import React from "react";
import { Nav, NavLink } from "./styles";

const NavBar = () => (
  <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/blog">Blog</NavLink>
  </Nav>
);

export default NavBar;
