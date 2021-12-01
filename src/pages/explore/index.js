import { Box } from "@material-ui/system";
import Items from "../../components/items";
import Querier from "./components/querier";
import styles from "./styles.module.css";
import { getLatestItems } from "./services/request";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Explore = (props) => {
  const alert = useAlert();
  const [latestItems, setLatestItems] = useState([]);
  useEffect(() => {
    const fetchLatestItems = async () => {
      try {
        const res = await props.getItems();
        // const res = await getLatestItems();
        if (res && res.data) {
          setLatestItems(res.data);
        }
      } catch (err) {
        alert.error(err.response.data);
      }
    };
    fetchLatestItems();
  }, []);
  return (
    
    <div className={styles.wrapper}>
      <Box height="100%">
        <Querier />
      </Box>
      <Box height="100%" width="50%">
      <Items items={latestItems} />
      </Box>
    </div>
  );
};

export default Explore;
