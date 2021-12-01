import { TextField, Button, Typography } from "@material-ui/core";
<<<<<<< HEAD
=======
import React, { useEffect, useState } from "react";
>>>>>>> aaaa9df95e187e220016c21942d3ec6a45021aa6
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@material-ui/system";
import { useAlert } from "react-alert";
import styles from "./styles.module.css";
<<<<<<< HEAD
import { useState } from "react";
import { signIn } from "./service/request";
import { useAuth } from "../../auth";

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();

  const handleSubmit = async () => {
    try {
      const res = await signIn(email, password);
      const token = res.data.token;
      login(token);
      alert.success("Welcome!");
      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (err) {
      alert.error(err.response.data);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Box marginTop="40px">
        <Typography variant="h2" component="div" gutterBottom>
          Sign In
        </Typography>
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
        />
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          variant="outlined"
        />
        <Box marginTop="10px" display="flex" gap="10px">
          <Typography variant="body2">Not has Account?</Typography>
          <Link to="/signup">Register</Link>
=======
import API from "../../utils/API"

const SignIn = (props) => {
  const navigate = useNavigate()
  const [loginFormState, setLoginFormState] = useState ({
    email:"",
    password:"",
  });

  const [token, setToken] = useState("")

  const [userState, setUserState] = useState({})

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

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginFormState)
    const res = API.login(loginFormState).then(res=>{
      setToken(res.data.token)
      console.log(token)
      console.log(userState)
      localStorage.setItem("token", res.data.token)
      navigate("/")
      window.location.reload(true);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleLogin} className="LoginForm"> 
        <Box marginTop="40px">
          <Typography variant="h2" component="div" gutterBottom>
            Sign In
          </Typography>
        </Box>
        <Box width="400px" marginTop="20px">
          <TextField
            fullWidth
            onChange={handleLoginChange}
            name="email"
            value = {loginFormState.email}
            label="Email"
            variant="outlined"
          />
        </Box>
        <Box width="400px" marginTop="20px">
          <TextField
            fullWidth
            onChange={handleLoginChange}
            value = {loginFormState.password}
            label="Password"
            name="password"
            type="password"
            variant="outlined"
          />
          <Box marginTop="10px" display="flex" gap="10px">
            <Typography variant="body2">Not has Account?</Typography>
            <Link to="/signup">Register</Link>
          </Box>
        </Box>
        <Box width="400px" marginTop="40px">
          <Button type="submit" variant="contained">
            Submit
          </Button>
>>>>>>> aaaa9df95e187e220016c21942d3ec6a45021aa6
        </Box>
      </Box>
      <Box width="400px" marginTop="40px">
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default SignIn;
