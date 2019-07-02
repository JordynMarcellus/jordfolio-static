import React from "react";
import * as HeaderStyles from "./styles";

const Header = ({ headline, subhead }) => (
  <HeaderStyles.Header>
    <HeaderStyles.Headline>{headline}</HeaderStyles.Headline>
    <HeaderStyles.SubHead>{subhead}</HeaderStyles.SubHead>
  </HeaderStyles.Header>
);

export default Header;
