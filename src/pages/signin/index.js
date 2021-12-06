import { TextField, Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@material-ui/system";
import styles from "./styles.module.css";
import API from "../../utils/API"

const SignIn = (props) => {
  const navigate = useNavigate()
  const [loginFormState, setLoginFormState] = useState ({
    email:"",
    password:"",
  });

  const [token, setToken] = useState("")


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
      localStorage.setItem("userId", res.data.user.id)
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
        <Box width="100%" marginTop="20px">
          <TextField
            fullWidth
            onChange={handleLoginChange}
            name="email"
            value = {loginFormState.email}
            label="Email"
            variant="outlined"
          />
        </Box>
        <Box width="100%" marginTop="20px">
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
        <Box width="100%" marginTop="40px">
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default SignIn;
