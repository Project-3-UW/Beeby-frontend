import { TextField, Button, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@material-ui/system";
import { useAlert } from "react-alert";
import styles from "./styles.module.css";
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
