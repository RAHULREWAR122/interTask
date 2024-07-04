import React, { useState } from "react";

import style from "./profile.module.css";
import { MdDashboard } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { LiaTvSolid } from "react-icons/lia";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuMusic4 } from "react-icons/lu";
import { BiVideoRecording } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import { MdSettings } from "react-icons/md";

import { MdOutlineHelpOutline } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {
  const [showAside, setShowAside] = useState(true);

  const handleAside = () => {
    setShowAside(!showAside);
  };

  return (
    <div className={style.profileContainer}>
      <div className={style.showAsideBar}>
        <aside className={`${style.sidebar} ${showAside ? style.show : ""}`}>
          <span onClick={handleAside} className={style.asideHandle}>
            {showAside ? <CiCircleChevRight /> : <CiCircleChevLeft />}
          </span>
          <div className={style.logo}>
            How<span>Bee</span>
          </div>
          <nav className={`${style.navMenu} ${showAside ? style.reverse : ""}`}>
            <ul>
              <li>
                <MdDashboard /> <span> Dashboard</span>
              </li>
              <li>
                <FaPerson />
                <span> Posture Routine</span>
              </li>
              <li>
                <LiaTvSolid /> <span>Classroom</span>
              </li>
              <li>
                <FaRegCalendarAlt /> <span>Calendar</span>
              </li>
              <li>
                <LuMusic4 />
                <span> Music</span>
              </li>
              <li>
                <BiVideoRecording />
                <span> Recordings</span>
              </li>
              <li>
                <TbMoneybag /> <span>Earnings</span>
              </li>
              <li>
                <MdSettings /> <span>Settings</span>
              </li>
            </ul>
          </nav>
          <div
            className={`${style.helpSupport} ${
              showAside ? style.helpSupportRev : ""
            }`}
          >
            <p>
              <MdOutlineHelpOutline /> <span>Help and Support</span>
            </p>
            <p>
              <FiLogOut /> <span>Logout</span>
            </p>
          </div>
        </aside>
      </div>

      <main className={style.profileContent}>
        <header className={style.header}>
          <span>
            <h3>
              <FaRegEdit />
            </h3>
            <h2>Profile</h2>
          </span>
          <div className={style.profilePicture}>
            <img
              src="https://images.pexels.com/photos/14970485/pexels-photo-14970485/free-photo-of-photo-of-man-wearing-red-jacket.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Profile"
            />
          </div>
          <div className={style.about}>
            <label>About</label>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                quia.
              </li>
            </ul>
          </div>
          <div className={style.pricing}>
            <label>Pricing</label>
            <ul>
              <li>Thrice a week: $__</li>
              <li>Twice a week: $__</li>
              <li>Monday to Friday: $__</li>
              <li>Elderly Batch: $__</li>
            </ul>
          </div>
        </header>
        <section className={style.profileDetails}>
          <form className={style.profileForm}>
            <div className={style.formGroup}>
              <label>Name</label>
              <input type="text" value="Mehrab Bozorgi" readOnly />
            </div>
            <div className={style.formGroup}>
              <label>Email</label>
              <input
                type="email"
                value="mehrabbozorgi.business@gmail.com"
                readOnly
              />
            </div>
            <div className={style.formGroup}>
              <label>Contact Number</label>
              <input type="text" value="58077.79" readOnly />
            </div>
            <div className={style.formGroup}>
              <label>Gender</label>
              <input type="text" value="Mehrab" readOnly />
            </div>
            <div className={style.formGroup}>
              <label>Date of Birth</label>
              <input type="text" value="Bozorgi" readOnly />
            </div>
            <div className={style.formGroup}>
              <label>User ID</label>
              <input type="text" value="33062 Zboncak isle" readOnly />
            </div>
            <div className={style.formGroup}>
              <label>Password</label>
              <input type="password" value="sbdfbnd65sfdvb s" readOnly />
            </div>
            <div className={style.formGroup}>
              <label>Class Categories</label>
              <textarea
                value="Yoga for flexibility, elderly, beginner level classes for all."
                readOnly
              />
            </div>
            <div className={style.formGroup}>
              <label>Available Timings</label>
              <textarea value="7-10 AM, 4-7 PM" readOnly />
            </div>
            <div className={style.formButtons}>
              <button> Cancel</button>
              <button type="submit">Save</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Profile;
