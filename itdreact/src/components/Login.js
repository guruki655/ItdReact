import React, { useState } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(login(res.data.user));
      setMessage("Login successful!");
      localStorage.setItem("token", res?.data?.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed!");
    }
  };

  return (
    <div className="login-wrapper">
      {/* Internal CSS */}
      <style>{`
  .login-wrapper {
    background: linear-gradient(to right, #fceabb, #f8b500);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .login-container {
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .login-title {
    text-align: center;
    font-weight: bold;
    color: #ff3f6c;
    margin-bottom: 20px;
  }

  .form-label {
    font-weight: 600;
    margin-bottom: 5px;
  }

  .form-control {
    border-radius: 8px;
  }

  .login-btn {
    background-color: #ff3f6c;
    color: white;
    font-weight: bold;
    width: 100%;
    border-radius: 8px;
  }

  .login-btn:hover {
    background-color: #e9345d;
  }

  .message {
    margin-top: 15px;
    text-align: center;
  }
`}</style>


      <Navbar />
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn login-btn">
            Login
          </button>
        </form>
        {message && <p className="message text-success">{message}</p>}
        {error && <p className="message text-danger">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
