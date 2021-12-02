import { Box } from "@material-ui/system";
import Items from "../../components/items";
import Querier from "./components/querier";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import API from "../../utils/API"

const Explore = (props) => {
  const alert = useAlert();

  const [latestItems, setLatestItems] = useState([]);

  useEffect(() => {
    API.getItems(props.token, null).then(items=>{
      console.log(items.data)
      setLatestItems(items.data);
    })
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
