import React from "react";
import style from "./login.module.css";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className={style.login}>
      <div className={style.form}>
        <div className={style.logo}>
          <img
            src="/logo.webp"alt="logo"
          />
        </div>
        <h2 className={style.page}>Log in</h2>
        <div className={style.buttons}>
          <span>
            <img src="/google.png" alt="google icon" /> <button>Google</button>
          </span>
          <span>
            <FaFacebookF /> <button>Facebook</button>
          </span>
        </div>

        <div className={style.login_container}>
          <div className={style.login_form}>
            <form>
              <label>
                Email Address
                <input type="email" name="email" placeholder="xyz@gmail.com" />
              </label>
              <label>
                Password
                <input type="password" name="password" />
              </label>
              <label
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  <input type="checkbox" name="terms" />
                  Remember me
                </span>
                <a href="#"> Reset Password? </a>
              </label>
              <NavLink className={style.log_in} to="#">
                Log in
              </NavLink>
              <div className={style.login_link}>
                Don't have account yet? <NavLink to="/">New Account</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
