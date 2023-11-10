import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ link, name }) => {
  return (
    <div className="nav-item nav-link">
      <NavLink to={link} activeClassName="active">
        <span>{name}</span>
      </NavLink>
    </div>
  );
};

export default NavItem;
