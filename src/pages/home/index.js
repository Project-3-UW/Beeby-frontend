import { useEffect, useState } from "react";
import { useAlert } from "react-alert";

import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import bannerImage from "../../assets/image/banner.jpg";

import { useAuth } from "../../auth";
import Items from "../../components/items";
import styles from "./styles.module.css";
import { getLatestItems } from "./services/request";

const Home = () => {
  const alert = useAlert();
  const [latestItems, setLatestItems] = useState([]);
  useEffect(() => {
    const fetchLatestItems = async () => {
      try {
        const res = await getLatestItems();
        if (res && res.data) {
          setLatestItems(res.data);
        }
      } catch (err) {
        alert.error(err.response.data);
      }
    };
    fetchLatestItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              Singn up
            </Button>
          </Link>
        </div>
      )}

      <div className={styles.items}>
        <Typography variant="h4" component="div" gutterBottom>
          New Items
        </Typography>
        <Items items={latestItems} />
      </div>
    </div>
  );
};

export default Home;
