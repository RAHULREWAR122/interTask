import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "./nav.module.css";

function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/"
            >
              SignUp
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/joinUs"
            >
              JoinUs
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/login"
            >
              Login
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/profile"
            >
              Profile
            </NavLink>{" "}
          </li>
         
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
