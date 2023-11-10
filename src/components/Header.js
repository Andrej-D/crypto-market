import React from "react";
import { useLogIn } from "../hooks/useLogIn";
import "./../theme/body.css";
import "./../theme/bootstrap.min.css";
import LoginButton from "./LoginButton";
import NavItem from "./NavItem";

const Header = () => {
  const { isLoggedIn, onChangeLoggedIn } = useLogIn();

  const handleLogin = () => {
    onChangeLoggedIn(true);
  };
  const handleLogout = () => {
    onChangeLoggedIn(false);
  };
  return (
    <div>
      <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <h3 className="text-primary">MINI CRYPTO EXCHANGE</h3>
        <NavItem link={"/"} name={"Home"} />{" "}
        {isLoggedIn && <NavItem link={"/favorites"} name={"Favorites"} />}
        <div className="navbar-nav align-items-center ms-auto">
          {!isLoggedIn ? (
            <LoginButton handleLogin={handleLogin} />
          ) : (
            <div></div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
