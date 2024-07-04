import React from "react";
import style from "./sign_Up.module.css"
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SignUp() {

  return (<>

    <div className={style.sign__Up}>
      <div className={style.form}>
        <div className={style.logo}>
          <img
            src="/logo.webp"
            alt="logo"
          />
        </div>
        <h2 className={style.page}>Sign Up</h2>
        <div className={style.buttons}>
          <span>
            <img src="/google.png" alt="google icon" /> <button>Google</button>
          </span>
          <span>
            <FaFacebookF /> <button>Facebook</button>
          </span>
        </div>

        <div className={style.signup_container}>
          <div className={style.signup_form}>
            <form>
              <label>
                Full Name
                <input type="text" name="fullname" placeholder="Ram" />
              </label>
              <label>
                Email Address
                <input type="email" name="email" placeholder="xyz@gmail.com" />
              </label>
              <label>
                Password
                <input type="password" name="password" />
              </label>
              <label>
                <input type="checkbox" name="terms" />
                By creating an account you agree to the
                <a href="/#"> terms of use </a> and
                <a href="/#"> privacy policy</a>.
              </label>
              <NavLink className={style.sign_up} to="/#">Create account</NavLink>
              <div className={style.login_link}>
                Already have an account? <NavLink to="/login">Log in</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>  );
}

export default SignUp;
