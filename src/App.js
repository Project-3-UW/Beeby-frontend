import React, { useEffect, useState } from "react";
import API from "./utils/API"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
// eslint-disable-next-line
const axios = require("axios");

function App() {
  // eslint-disable-next-line
  const [userState, setUserState] = useState({
    email:"",
    id:0
  })

// eslint-disable-next-line
  const [token, setToken] = useState("")

  const [loginFormState, setLoginFormState] = useState ({
    email:"",
    password:""
  });

  const [signupFormState, setSignupFormState] = useState ({
    email:"",
    password:""
  });

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    if(myToken){
      API.getProfile(myToken)
      .then(res => {
        setToken(myToken)
        setUserState({
          email:res.data.user.email,
          id:res.data.id
        })
      }).catch(err =>{
        console.log(err)
        localStorage.removeItem("token")
      })
    }
  })

  const handleLoginChange = (event) => {
    if (event.target.name === "email") {
      setLoginFormState({
        ...loginFormState,
        email: event.target.value,
      });
    } else {
      setLoginFormState({
        ...loginFormState,
        password: event.target.value,
      });
    }
  };

  const handleSignupChange = (event) => {
    if (event.target.name === "email") {
      setSignupFormState({
        ...signupFormState,
        email: event.target.value,
      });
    } else {
      setSignupFormState({
        ...signupFormState,
        password: event.target.value,
      });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    API.login(loginFormState)
      .then((res) => {
        console.log(res.data);
        setUserState({
          email:res.data.user.email,
          id:res.data.user.id
        })
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    API.signup(signupFormState).then(res => {
      API.login(signupFormState)
      .then((res) => {
        console.log(res.data);
        setUserState({
          email:res.data.user.email,
          id:res.data.user.id
        })
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
      })
      .catch((err) => {
        console.log(err);
      });
    })
  }

  const userLogout = () => {
    setUserState({email:"",id:0})
    setToken("")
    localStorage.removeItem("token")
  }

  return (
    <>
      <LoginForm
        submit={handleLoginSubmit}
        change={handleLoginChange}
        loginState={loginFormState}
      />
      <SignupForm
        submit={handleSignupSubmit}
        change={handleSignupChange}
        signupState={signupFormState}
      />
      <h1>Placeholder!</h1>
      <button onClick = {userLogout}>Logout</button>
    </>
  );
}

export default App;
