import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";

export const Nav = styled("nav")`
  background-image: linear-gradient(to right, black 0%, #323232 100%);
  font-size: 2rem;
  padding: 2rem 0 3rem 0;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 70%);
  display: flex;
  justify-content: space-around;
`;

export const NavLink = styled(props => <Link {...props} />)`
  color: white;
  text-decoration: none;
  &:visited {
    color: #f1f2f6;
  }
  &:hover {
    text-decoration: underline;
  }
  &:last-child {
    border: none;
  }
`;
