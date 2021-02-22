import React, { useState } from "react";
import { Link as NavLink } from "react-router-dom";

import { FcBookmark } from "react-icons/fc";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FcBookmark className="navbar-icon"></FcBookmark>
              FreeSchool &trade;
            </NavLink>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  to="/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Teacher
                </NavLink>
              </li>
              {props.user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/my-profile"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
                      My Profile
                    </NavLink>
                  </li>
                  <li className="nav-btn">
                    {button ? (
                      <NavLink
                        to="/logout"
                        className="btn-link"
                        onClick={closeMobileMenu}
                      >
                        <Button
                          onClick={props.handleLogout}
                          buttonStyle="btn--outline"
                        >
                          Log out
                        </Button>
                      </NavLink>
                    ) : (
                      <NavLink to="/logout" className="btn-link">
                        <Button
                          onClick={props.handleLogout}
                          buttonStyle="btn--outline"
                          buttonSize="btn--mobile"
                        >
                          Log out
                        </Button>
                      </NavLink>
                    )}
                  </li>
                </>
              ) : (
                <li className="nav-btn">
                  {button ? (
                    <NavLink
                      to="/sign-up"
                      className="btn-link"
                      onClick={closeMobileMenu}
                    >
                      <Button buttonStyle="btn--outline">SIGN UP</Button>
                    </NavLink>
                  ) : (
                    <NavLink to="/sign-up" className="btn-link">
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--mobile"
                      >
                        SIGN UP2
                      </Button>
                    </NavLink>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
