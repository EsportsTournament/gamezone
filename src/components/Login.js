import React, { useRef, useState } from "react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const toastSuccessConfig =  {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
};

const toastErrorConfig =  {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
};

const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegisterFormChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        registerForm
      );
      toast.success(res.data.message, toastSuccessConfig);
      handleLoginClick();
    } catch (err) {
      toast.error(err.response.data.error, toastErrorConfig);
    }
  };

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const generateCode = () => {
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    navigate(`/play/${newCode}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginForm
      );
      localStorage.setItem("token", res.data.token);
      toast.success(`Welcome ${res.data.username}`, toastSuccessConfig);
      generateCode();
    } catch (err) {
      toast.error(err.response.data.message, toastErrorConfig);
    }
  };
  const containerRef = useRef(null);

  const handleRegisterClick = () => {
    containerRef.current.classList.add("active");
  };

  const handleLoginClick = () => {
    containerRef.current.classList.remove("active");
  };

  return (
    <div className="formBody">
      {/* <input name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Login</button> */}
      <div ref={containerRef} className="container">
        <div className="form-box login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                onChange={handleRegisterFormChange}
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleRegisterFormChange}
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleRegisterFormChange}
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button
              type="submit"
              className="btn"
            >
              Register
            </button>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button onClick={handleRegisterClick} className="btn register-btn">
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button onClick={handleLoginClick} className="btn login-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
