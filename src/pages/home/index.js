import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth";
import Items from "../../components/items";
import styles from "./styles.module.css";
import { getLatestItems } from "./services/request";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
const Home = (props) => {
  const { authenticated } = useAuth();
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <Typography variant="h4" component="div" gutterBottom>
          A place just for you and your little ones
        </Typography>
        <Link to="/explore">
          <Button variant="contained" color="inherit">
            Explore
          </Button>
        </Link>
      </div>
      {!authenticated && (
        <div className={styles.invite}>
          <Typography
            variant="h4"
            className={styles.title}
            component="div"
            gutterBottom
          >
            Ready to share and swap ? <br /> Join us today!
          </Typography>
          <Link to="/signup">
            <Button variant="contained" color="secondary">
              Sign up
            </Button>
          </Link>
        </div>
      )}

    </div>
  );
};

export default Home;
