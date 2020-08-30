
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Form from "./Form";

const Login = (props: any) => {
  let history = useHistory();

  const [result, setResult] = useState("");
  const [change, setChange] = useState(true);
  useEffect(() => {
    let hidden = document.getElementById("alert-login");
    if (result == "false") {
      if (hidden) {
        hidden.style.backgroundColor = "red";
        hidden.style.color = "white";
        hidden.style.display = "block";
        hidden.innerHTML = "Sai tài khoản hoặc mật khẩu";
      }
    } else {
      if (result == "short") {
        if (hidden) {
          hidden.style.backgroundColor = "red";
          hidden.style.color = "white";
          hidden.style.display = "block";
          hidden.innerHTML = "Vui lòng nhập đủ";
        }
      } else {
        if (hidden) {
          hidden.style.display = "none";
        }
        if (result == "true") {
          history.push("/blank");
        }
      }
    }
    let time=setTimeout(function () {
      if (hidden) {
        hidden.style.display = "none";  
      }
    }, 1500);
    return () => {
      clearTimeout(time);
    };
  },[change]);

 
  function handleTodoFormSubmit(formValues: any) {
    console.log("Form submit: ", formValues);
    // add new todo to current todo list
    if (formValues.user === "admin" && formValues.pass === "admin") {
      console.log("true");
      setResult("true");
    } else {
      if (formValues.user === "" || formValues.pass === "") {
        setResult("short");
        if ((formValues.user === "" && formValues.pass === "")) {
          
        }
      } else {
        console.log("false");
        setResult("false");
      }
    }
    setChange(!change);
  }
  return (
      
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Admin</b>LTE
          </a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <Form onSubmit={handleTodoFormSubmit} />
          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a
              href="#"
              className="btn btn-block btn-social btn-facebook btn-flat"
            >
              <i className="fa fa-facebook"></i> Sign in using Facebook
            </a>
            <a
              href="#"
              className="btn btn-block btn-social btn-google btn-flat"
            >
              <i className="fa fa-google-plus"></i> Sign in using Google+
            </a>
          </div>

          <a href="#">I forgot my password</a>
          <br />
          <a href="register.html" className="text-center">
            Register a new membership
          </a>
      </div>
      
      <div className="alert alert-primary" role="alert" id="alert-login"/>
      
      </div>
      
  );
}

export default Login;

