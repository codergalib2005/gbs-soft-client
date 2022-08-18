import React, { useState } from "react";
import styles from "./Login.module.css";
import saly1 from "../../assets/saly-1.png";
import saly2 from "../../assets/saly-2.png";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash, FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import axios from "axios";


const Login = () => {
  const [error, setError] = useState("");
  const [see, setSee] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/sign_in", data);
      localStorage.setItem("gbs_course_token", response.data.token)
    }
    catch ({ response }) {
      setError(response.data.message);
    }
  };
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
            <h4 className={styles.sub_heading}>Welcome Again</h4>
            <h1 className={styles.heading}>Sign in</h1>
          </div>
          <div>
            <p className="link">
              don't have account? <br /> <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
        {error && <div onClick={() => setError("")} className={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.body}>
          <div className={styles.input_group}>
            <label htmlFor="email">
              <p>E-mail</p>
              <input
                className={errors.email && "field_error"}
                type="email"
                {...register("email", { required: true })}
                id="email"
                placeholder="E-mail"
              />
            </label>
          </div>
          <div className="styles password_group">
            <label htmlFor="password">
              <p>Password</p>
              <div className={styles.password_field}>
                <input
                  className={errors.password && "field_error"}
                  type={see ? "text" : "password"}
                  {...register("password", { required: true })}
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
          <div className={styles.forgot_password}>
            <Link to="/forgot_password">Forgot Password</Link>
          </div>
          <button type="submit">Sign in</button>
        </form>
        <div className={styles.social_box}>
          <p className={styles.or}>OR</p>
          <div className={styles.social_wrapper}>
            <button>
              <FcGoogle /> <span>Sign in with Google</span>
            </button>
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
