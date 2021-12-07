import {
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Button,
  Typography,
  Grid
} from "@material-ui/core";
import { useAlert } from "react-alert";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLocation } from "../../utils/location";
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import { API } from "../../utils/API"

const publicKey = 'public_t+4VajkBmNbytb2Sa80EQD4geXo=';
const urlEndpoint = 'https://ik.imagekit.io/beebyapp';
const authenticationEndpoint = API.authUrl
const SignUp = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line

  const alert = useAlert();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [position, setPosition] = useState([]);
  const [allowLocation, setAllowLocation] = useState(false);
  const [bio, setBio] = useState("")
  const [userImg, setImgUser] = useState("")
  // const [allowNotication, setAllowNotication] = useState(true);

  const onError = err => {
    console.log("Error", err);
  };
  const onSuccess = res => {
    console.log("Success", res)
    setImgUser(...userImg, res.url)
  };

  useEffect(() => {
    if (allowLocation) {
      getLocation()
        .then((pos) => {
          setPosition(pos);
        })
        .catch((err) => {
          alert.error(err);
        });
    } else {
      setPosition([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowLocation]);

  const handleSubmit = async () => {
    console.log(userImg)
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
      await API.signup(
        firstname,
        lastname,
        email,
        password,
        position[1],
        position[0],
        bio,
        userImg
      );
      alert.success("Success to sign up!!");
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
    } catch (err) {
      // const errors = err.response.data.err.errors;
      console.log(err)
      // if (errors[0] && errors[0].message) {
      //   alert.error(errors[0].message);
      // }
      //alert.error(err.response.data);
    }
  };

  return (
    <Grid container className={styles.wrapper}>
      <Grid item xs={10} lg={12}>
        <Typography
          textAlign="center"
          variant="h2"
          component="div"
          gutterBottom
        >
          Sign Up
        </Typography>
      </Grid>
      <Grid xs={10} md={8} lg={4} className="signupDetail" >
        <Grid
          item
          style={{ margin: "10px" }}
        >
          <TextField
            fullWidth
            label="First name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          style={{ margin: "10px" }}
        >
          <TextField
            fullWidth
            label="Last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          style={{ margin: "10px" }}
        >
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          style={{ margin: "10px" }}
        >
          <TextField
            fullWidth
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          style={{ margin: "10px" }}
        >
          <TextField
            fullWidth
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            label="Confirm Password"
            type="password"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          style={{ margin: "10px" }}
        >
          <TextField
            fullWidth
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            variant="outlined"
            multiline
            rows={2}
            rowsMax={4}
          />
        </Grid>

        <Grid
          item
          style={{ margin: "5px" }}
        >
          <FormGroup>
            <Typography variant="h7" color="text.secondary">
              Please share your location so people can find your items, or you can find items in need.
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked={false}
                  value={allowLocation} // add description to show why they need to share location
                  onChange={(e) => setAllowLocation(e.target.checked)}
                />
              }
              label="Share Location"
            />
            <IKContext
              publicKey={publicKey}
              urlEndpoint={urlEndpoint}
              authenticationEndpoint={authenticationEndpoint} >
              <IKUpload
                fileName="user.jpg"
                isPrivateFile={false}
                useUniqueFileName={true}
                folder={"/userImg"}
                onError={onError}
                onSuccess={onSuccess}
              />
            </IKContext>
          </FormGroup>
        </Grid>

        <Grid
          item
          style={{ margin: "10px" }}
        >
          <Typography variant="body2">Already has an account?<Link to="/signin">  Login instead</Link></Typography>

        </Grid>

        <Grid
          itemstyle={{ margin: "10px" }}
        >
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
