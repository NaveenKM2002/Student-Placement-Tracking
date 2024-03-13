import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterScreen() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (name.trim() === "") {
      setErrorMessage("Name is required");
      return;
    }
    if (email.trim() === "") {
      setErrorMessage("Email is required");
      return;
    }
    if (password.trim() === "") {
      setErrorMessage("Password is required");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:7000/app/v2/reg", {
        role,
        name,
        email,
        password,
       
      });
      console.log(data);
      alert("Registered Successfully");
      nav("/login");
    } catch (error) {
      console.error("Registration failed:", error.message);
      setErrorMessage("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6">
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <h2 className="text-center mb-4">Registration Form</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Role</label>
                <input type="text" value={role}
                 onChange={(e) => setRole(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="pic" className="form-label">
                  Profile Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="pic"
                  onChange={(e) => setPic(e.target.files[0])}
                />
              </div> */}
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
