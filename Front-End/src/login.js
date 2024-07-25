import React, { useState } from "react";

import myVector from "./Vector.svg";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import domain from "./domain";
import axios from "axios";
import GardenPayLogo from "/Users/selvendrans/Documents/GardenPay/Front-End/src/icons/GardenPaywhite.png";


const RegisterCompany = () => {
  const [formValues, setFormValues] = useState({
    companyName: "",
    username: "",
    password: "",
    userRole: "Employer",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [userRole, setUserRole] = useState("Employer");
  const [progress, setProgress] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setErrorMsg(null);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleRoleChange = (event) => {
    setUserRole(event.target.value);
    setFormValues({
      ...formValues,
      userRole: event.target.value,
    });
    setErrorMsg(null);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setProgress(true);

      const isHR = formValues.userRole === "Employer";
      const url = `${domain}/login`;
      const res = await axios.post(url, {
        companyName: formValues.companyName,
        username: formValues.username,
        password: formValues.password,
        isHR,
      });
      const data = res.data;
      setProgress(false);

      // TODO
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", formValues.username);
        localStorage.setItem("company", formValues.companyName.toUpperCase());

        if (isHR) {
          navigate("/hr-dashboard");
        } else {
          navigate("/employee-dashboard");
        }
      } else {
        setErrorMsg("Wrong Credentials !!");
      }
    } catch (err) {
      setProgress(false);
      setErrorMsg("Server down !!");
    }
  };

  return (
    <div>
      <style>
        {`
          body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000;
  position: relative;
  overflow: hidden;
}

.background-vector {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.app-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.brand {
  font-size: 24px;
  color: white;
  cursor: pointer;
}

.register-container {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #333;
  border: 1px solid;
  border-image-source: radial-gradient(
    105.56% 203.38% at -2.85% 105.57%,
    rgba(255, 255, 255, 0.5) 1.48%,
    rgba(255, 255, 255, 0) 39.51%,
    rgba(255, 255, 255, 0) 68.17%,
    rgba(255, 255, 255, 0.120573) 74.1%,
    rgba(255, 255, 255, 0.5) 100%
  );
}

.form-input {
  padding: 10px;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.8); 
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: calc(100% - 20px); 
  box-sizing: border-box;
}

.password-container {
  position: relative;
  width: 100%;
}

.toggle-visibility {
  position: absolute;
  right: 23px;
  top: 38%;
  transform: translateY(-50%);
  cursor: pointer;
}

.role-selection {
  margin-bottom: 15px;
  color: white;
}

label {
padding-right: 20px;
}

.role-radio {
  margin-right: 5px;
}

.submit-btn,
.metamask-btn {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgba(110, 71, 255, 0.8); 
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: calc(100% - 20px); 
  box-sizing: border-box;
  margin-bottom: 20px;
}

.submit-btn:hover,
.metamask-btn:hover {
  background: rgba(78, 1, 154, 0.8); 
}

a {
  color: #006af1;
  font-weight: 1000;
}

h1 {
  color: white;
}

p {
  color: white;
}

.SignIn-btn {
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 30px;
  background-color: transparent;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  box-sizing: border-box;
  margin-left: 5px;
}

.SignIn-btn:hover {
  background: white;
  color: black;
}
          
.content {
  margin-top: -250px;
}


          
          
        `}
      </style>
      <div className="app-container light-mode">
        <img
          src={myVector}
          alt="background vector"
          className="background-vector"
        />
        <div className="content">
        <div className="top-bar">
          {/* <div className="brand" onClick={() => navigate("/")}> */}
          <img style={{width:'180px', margin:'0px 0px -50px -10px'}} src={GardenPayLogo} onClick={() => navigate("/")} />
          {/* GardenPay */}
          {/* </div> */}
        </div>
        <div className="register-container">
          {progress && (
            <>
              <LinearProgress></LinearProgress>
              <Alert severity="info" className="alert">
                Transaction is in progress...
              </Alert>
            </>
          )}

          {errorMsg && (
            <Alert variant="filled" severity="error">
              {errorMsg}
            </Alert>
          )}
          <h1>Login as <p style={{color:'#A930E3', margin:'0px'}}>{userRole}</p></h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-input"
              placeholder="First name"
              name="companyName"
              value={formValues.companyName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="Last name"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              required
            />
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-input"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="toggle-visibility"
              >
                {passwordVisible ? "🫣" : "😪"}
              </span>
            </div>
            <div className="role-selection">
              <label>
                <input
                  type="radio"
                  value="Employer"
                  checked={formValues.userRole === "Employer"}
                  onChange={handleRoleChange}
                  className="role-radio"
                />
                😎Employer
              </label>
              <label>
                <input
                  type="radio"
                  value="Employee"
                  checked={formValues.userRole === "Employee"}
                  onChange={handleRoleChange}
                  className="role-radio"
                />
                👩‍💻Employee
              </label>
            </div>
            <div>
              <button type="submit" className="submit-btn">
                Log In
              </button>
            </div>
            <div>
              <p>
                Don't have an account?{" "}
                <button
                  className="SignIn-btn"
                  type="button"
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </button>
              </p>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
