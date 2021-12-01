import {
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@material-ui/system";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../../utils/API"

const SignUp = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState("")

  const [userState, setUserState] = useState({})

  const [signupFormState, setSignupFormState] = useState ({
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    // bio:"",
    // kidDOB:"",
  });
  
  const handleSignupChange = (event) => {
    if (event.target.name === "email") {
      setSignupFormState({
        ...signupFormState,
        email: event.target.value,
      });
    } else if(event.target.name === "password") {
      setSignupFormState({
        ...signupFormState,
        password: event.target.value,
      });
    } else if(event.target.name === "firstName") {
      setSignupFormState({
        ...signupFormState,
        firstName: event.target.value,
      });
    } else if(event.target.name === "lastName") {
      setSignupFormState({
        ...signupFormState,
        lastName: event.target.value,
      });
    } else if(event.target.name === "confirmpassword") {
      setSignupFormState({
        ...signupFormState,
        confirmpassword: event.target.value,
      });
    }
  };


  const handleSignupSubmit = (e) => {
    e.preventDefault();
    API.signup(signupFormState).then(res => {
      API.login(signupFormState)
      .then((res) => {
        console.log(res);
        setUserState({
          email:res.data.user.email,
          id:res.data.user.id,
          name: res.data.user.firstName
        })
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
        navigate("/")
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
    })
  }


  const locationSuccess = (pos) => {
    let crd = pos.coords;
    let currentState = signupFormState;
    currentState.longitude = crd.longitude
    currentState.latitude = crd.latitude
    setSignupFormState(currentState);
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
  }

  const locationError = (err) => {
    alert("please allow sharing your location")
  }

  const handleShareLocation = (e)=>{
    if(e.target.checked) {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      })
    } else {
      //remove value
      let currentState = signupFormState;
      delete currentState.longitude
      delete currentState.latitude
      setSignupFormState(currentState);
    }
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSignupSubmit} className="signupForm"> 
      <Box marginTop="40px">
        <Typography variant="h2" component="div" gutterBottom>
          Sign Up
        </Typography>
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          label="First name"
          name="firstName"
          value={signupFormState.firstName}
          onChange={handleSignupChange}
          variant="outlined"
        />
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          label="Last name"
          name="lastName"
          value={signupFormState.lastName}
          onChange={handleSignupChange}
          variant="outlined"
        />
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={signupFormState.email}
          onChange={handleSignupChange}
          type="email"
          variant="outlined"
        />
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          label="Password"
          name="password"
          value={signupFormState.password}
          onChange={handleSignupChange}
          type="password"
          variant="outlined"
        />
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          value={signupFormState.confirmpassword}
          name="confirmpassword"
          onChange={handleSignupChange}
          label="Confirm Password"
          type="password"
          variant="outlined"
        />
      </Box>
      <Box width="400px" marginTop="20px">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                onChange={handleShareLocation}
              />
            }
            label="Share Location"
          />
          <FormControlLabel
            control={
              <Switch
              />
            }
            label="Open Notication"
          />
        </FormGroup>
      </Box>
      <Box width="400px" marginTop="40px">
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
      </form>
      <Box width="400px" marginTop="10px" display="flex" gap="10px">
        <Typography variant="body2">Already has Account?</Typography>
        <Link to="/signin">Login</Link>
      </Box>
    </div>
  );
};

export default SignUp;
