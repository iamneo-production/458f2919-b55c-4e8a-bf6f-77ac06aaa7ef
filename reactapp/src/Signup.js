import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import "./Signup.css";



function Signup() {
  const initialValues = { email: "",username: "",mobilenumber: "", password: "",confirmpassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if(!values.mobilenumber){
      errors.mobilenumber = "Mobilenumber is required";
    }else if(!values.mobilenumber.length === 10){
      errors.mobilenumber = "Mobilenumber should be 10 digits";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirmpassword is required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "ConfirmPassword is not matched";
    }
    return errors;
  };

  return (
    <div>
      <header>FoodFox</header>
    <div className="container g-light mt-4">
        <div className="row">
            <div className="col-sm-4 mx-auto ">
                <center>
                <h2 className="text-center mb-4">Sign Up</h2>
                </center>
                <center>
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="email"
                placeholder="Enter email"
                value={formValues.email}
                onChange={handleChange}
              />
              </div>
            <p>{formErrors.email}</p>
            <br>
            </br>
          <div className="field">
            <input
              type="text"
              className="form-control form-control-lg"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <br>
          </br>
          <div className="field">
            <input
              type="text"
              className="form-control form-control-lg"
              name="mobilenumber"
              placeholder="Enter Mobilenumber"
              value={formValues.mobilenumber}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.mobilenumber}</p>
          <br>
          </br>
          <div className="field">
            <input
              type="password"
              className="form-control form-control-lg"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <br>
          </br>
          <div className="field">
            <input
              type="password"
              className="form-control form-control-lg"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={formValues.confirmpassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.confirmpassword}</p>
          <br>
          </br>
          <center>
          <button className="fluid ui button blue">Submit</button>
          </center>
          <br/>
          <center>
            <b >Already a user?<a href="C:\Users\linga\React\my-reactjs\src\Login.js">Login</a></b>
          </center>
          </form>
        </center>
    </div>
    </div>
    </div>
    </div>
  );
}
export default Signup;
