
import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passWord: "",
    role: "user"
  });

  const [message, setMessage] = useState("");


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:3000/signUp",
        formData
      );

      console.log(response.data);

      setMessage(response.data);

      setFormData({
        name: "",
        email: "",
        passWord: "",
        role: "user"
      });

    } catch (error) {

      console.log(error);

      setMessage(
        error.response?.data || "Something went wrong"
      );

    }

  };


  return (

    <div className="signup-container">

      <div className="signup-card">

        <h1>Create Account</h1>

        <p className="subtitle">
          Sign up to continue
        </p>


        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              name="passWord"
              placeholder="Enter your password"
              value={formData.passWord}
              onChange={handleChange}
              required
            />

          </div>


          <div className="input-group">

            <label>Role</label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >

              <option value="user">
                User
              </option>

              <option value="admin">
                Admin
              </option>

            </select>

          </div>


          <button type="submit">
            Create Account
          </button>

        </form>


        {message && (
          <p className="message">
            {message}
          </p>
        )}

      </div>

    </div>

  );
}


export default Signup;

