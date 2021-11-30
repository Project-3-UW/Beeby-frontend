import {
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { useAlert } from "react-alert";
import { Box } from "@material-ui/system";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "./service/request";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Dropdown from 'react-bootstrap/Dropdown';


const SignUp = () => {
  const navigate = useNavigate();
  
  // eslint-disable-next-line

  const alert = useAlert();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [allowLocation, setAllowLocation] = useState(true);
  // const [allowNotication, setAllowNotication] = useState(true);

  const handleSubmit = async () => {
    if (!firstname || !lastname || !email || !password) {
      alert.error("Please enter all fields!");
      return;
    }
    if (password.length < 8) {
      alert.error("Password length must more than eight!");
      return;
    }
    if (password !== confirmedPassword) {
      alert.error("Password is not same as confirm password!!");
      return;
    }
    try {
      await signUp(firstname, lastname, email, password);
      alert.success("Success to sign up!!");
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
    } catch (err) {
      alert.error(err.response.data);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Box marginTop="40px">
        <Typography variant="h2" component="div" gutterBottom>
          Sign Up
        </Typography>
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          label="First name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          variant="outlined"
        />
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          label="Last name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          variant="outlined"
        />
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          variant="outlined"
        />
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          variant="outlined"
        />
      </Box>
      <Box width="400px" marginTop="20px">
        <TextField
          fullWidth
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          label="Confirm Password"
          type="password"
          variant="outlined"
        />
      </Box>
      <Box width="400px" marginTop="20px">
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Baby Age Range
      </Dropdown.Toggle>
      <Dropdown.Menu
            className="dropdown" 
            type="button" 
            data-toggle="dropdown" 
            title="babyDoB">
            <Dropdown.Item >0-6m</Dropdown.Item>
            <Dropdown.Item>7m-1y</Dropdown.Item>
            <Dropdown.Item>older than 1y</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Box>
      <Box width="400px" marginTop="10px" display="flex" gap="10px">
        <Typography variant="body2">Already has Account?</Typography>
        <Link to="/signin">Login</Link>
      </Box>
      <Box width="400px" marginTop="20px">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                value={allowLocation}
                onChange={(e) => setAllowLocation(e.target.value)}
              />
            }
            label="Share Location"
          />
           {/* <FormControlLabel
            control={
              <Switch
                value={allowNotication}
                onChange={(e) => setAllowNotication(e.target.value)}
              />
            }
            label="Open Notication"
          /> */}
        </FormGroup>
      </Box>
      <Box width="400px" marginTop="40px">
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default SignUp;
