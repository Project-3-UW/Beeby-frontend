import { TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/system";
import styles from "./styles.module.css";


const SignIn = (props) => {
  return (
    <div className={styles.wrapper}>
      <form onSubmit={props.submit} className="LoginForm"> 
        <Box marginTop="40px">
          <Typography variant="h2" component="div" gutterBottom>
            Sign In
          </Typography>
        </Box>
        <Box width="400px" marginTop="20px">
          <TextField
            fullWidth
            onChange={props.change}
            name="email"
            value = {props.loginState.email}
            label="Email"
            variant="outlined"
          />
        </Box>
        <Box width="400px" marginTop="20px">
          <TextField
            fullWidth
            onChange={props.change}
            value = {props.loginState.password}
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
        </Box>
      </form>
    </div>
  );
};

export default SignIn;
