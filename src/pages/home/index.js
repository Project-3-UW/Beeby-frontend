import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import bannerImage from "../../assets/image/banner.jpg";

import { useAuth } from "../../auth";
import styles from "./styles.module.css";

const Home = () => {
  const { authenticated } = useAuth();
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.banner}
        style={{ background: `url(${bannerImage})` }}
      >
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
