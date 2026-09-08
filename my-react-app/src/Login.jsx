
import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate=  useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    passWord: ""
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
        "http://localhost:3000/login",
        formData
      );

      console.log("Login Response:", response.data);



      // Token backend se mila
      const token = response.data.token;
      if(token){
        navigate('/dash')
      }


      // Token localStorage mein save
      localStorage.setItem("token", token);


      // 1 minute ka timer
    //   setTimeout(() => {

    //     localStorage.removeItem("token");
    
    //     alert("Session expired. Please login again.");
    
    //     navigate("/");
    
    //   }, 60000);
    


      setMessage("Login successful!");


      console.log("Token:", token);


      // Form clear
      setFormData({
        email: "",
        passWord: ""
      });


    } catch (error) {

      console.log("Login Error:", error);

      setMessage(
        error.response?.data?.message ||
        error.response?.data ||
        "Something went wrong"
      );

    }

  };


  return (

    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to your account
        </p>


        <form onSubmit={handleSubmit}>

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


          <button type="submit">
            Login
          </button>

        </form>


        {message && (
          <p className="login-message">
            {message}
          </p>
        )}

      </div>

    </div>

  );

}

export default Login;

