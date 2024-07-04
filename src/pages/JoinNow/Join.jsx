import React, { useState } from "react";
import style from "./join.module.css";
import { NavLink } from "react-router-dom";

const Join = () => {
  return (
    <div className={style.container}>
      <div className={style.avatar}>
      <img
            src="https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
