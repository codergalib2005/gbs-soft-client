import React, { useState } from "react";
import styles from "./Register.module.css";
import saly1 from "../../assets/saly-1.png";
import saly2 from "../../assets/saly-2.png";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [see, setSee] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={`${styles.box} ${styles.left}`}>
          <img src={saly1} alt="" />
        </div>
        <div className={`${styles.box} ${styles.right}`}>
          <img src={saly2} alt="" />
        </div>
      </div>
      <div className={`no-select ${styles.card}`}>
        <div className={styles.card_header}>
          <div>
            <h4 className={styles.sub_heading}>Welcome to Advance</h4>
            <h1 className={styles.heading}>Sign up</h1>
          </div>
          <div>
            <p className="link">
              Have an account? <br /> <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
        <form className={styles.body}>
          <div className={styles.input_group}>
            <label htmlFor="email">
              <p>Email as username</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email as username"
              />
            </label>
          </div>
          <div className={styles.input_group_wrapper}>
            <div className={styles.input_group}>
              <label htmlFor="first_name">
                <p>First Name</p>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                />
              </label>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="last_name">
                <p>Last Name</p>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                />
              </label>
            </div>
          </div>
          <div className={styles.input_group}>
            <label htmlFor="phone">
              <p>Contact Number</p>
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="Contact Number"
              />
            </label>
          </div>
          <div className="styles password_group">
            <label htmlFor="password">
              <p>Password</p>
              <div className={styles.password_field}>
                <input
                  type={see ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                {see ? (
                  <span onClick={() => setSee(!see)}>
                    <FaRegEyeSlash />
                  </span>
                ) : (
                  <span onClick={() => setSee(!see)}>
                    <FaRegEye />
                  </span>
                )}
              </div>
            </label>
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
