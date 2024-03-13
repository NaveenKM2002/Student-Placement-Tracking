import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";

function LoginScreen() {
  const nav = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add isAuthenticated state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await axios.post("http://localhost:7000/app/v2/login", {
        role: role,
        email: email,
        password: password,
      });

      let res = response.data;

      if (res.msg === "success") {
        alert("Logged in successfully");

        setIsAuthenticated(true); // Update isAuthenticated state

        if (role === "admin") {
          nav(`/dashboard`);
        } else if (role === "student") {
          nav(`/studdashboard/:${res.userData._id}`);
        }
      } else {
        alert("Login error: Unexpected response");
      }
    } catch (e) {
      alert("error");
    }
  };

  return (
    <div className="d-flex justify-content-center m-2 p-2 app col-12" style={{ position: "absolute" }}>
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="title">LOGIN</h1>
        <div className="form-group">
          <label>Select Role:</label>
          <select className="form-control" id="role" name="role" required>
            <option value="admin">admin</option>
            <option value="student">student</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="form-control input-container"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control input-container"
          />
        </div>
        <div className="button-container">
          <input type="submit" className="btn btn-primary" value="Submit" />
          <p>
            New User ? <Link to={"/reg"}>Register here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
