import React from "react";
import style from "./join.module.css";
import { NavLink } from "react-router-dom";

const Join = () => {
  return (
    <div className={style.container}>
      <div className={style.avatar}>
      <img
            src="/logo.webp"
            alt="logo"
          />
      </div>
      <h1 className={style.title}>Sign Up</h1>
      <form className={style.form}>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel}>
            <input type="checkbox" className={style.checkbox} />
            Yoga Practitioner
          </label>
        </div>
        <div className={style.checkboxContainer}>
          <label className={style.checkboxLabel}>
            <input type="checkbox" className={style.checkbox} />
            Yoga Instructor
          </label>
        </div>
        <NavLink to="#" className={style.submitButton}>
          Join Now
        </NavLink>
      </form>
    </div>
  );
};

export default Join;
