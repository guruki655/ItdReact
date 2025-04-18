import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    userType: "customer",
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
        "http://localhost:3000/api/auth/register/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage(res.data.message || "Registration successful!");
      setFormData({
        email: "",
        name: "",
        password: "",
        userType: "customer",
      });
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data);
      console.log(err?.response?.data);
    }
  };

  return (
    <div className="register-wrapper">
      <Navbar />
      <div className="register-container">
        <h2 className="register-title">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">User Type:</label>
            <select
              name="userType"
              className="form-control"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="customer">Customer</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
              <option value="vendor">Vendor</option>
              <option value="delivery_partner">Delivery Partner</option>
            </select>
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        {message && (
          <p className="message text-success">{message}</p>
        )}
        {error && (
          <p className="message text-danger">{error}</p>
        )}
      </div>

      <style>{`
        .register-wrapper {
          background: linear-gradient(to right, #fceabb, #f8b500);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .register-container {
          width: 100%;
          max-width: 450px;
          background: #fff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .register-title {
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

        .register-btn {
          background-color: #ff3f6c;
          color: white;
          font-weight: bold;
          width: 100%;
          border-radius: 8px;
          padding: 10px;
          border: none;
        }

        .register-btn:hover {
          background-color: #e9345d;
        }

        .message {
          margin-top: 15px;
          text-align: center;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default Register;
