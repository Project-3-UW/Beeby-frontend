import { Box } from "@material-ui/system";
import Items from "../../components/items";
import Querier from "./components/querier";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import API from "../../utils/API"

const Explore = (props) => {
  const alert = useAlert();
  
  const [latestItems, setLatestItems] = useState([]);
  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    API.getItems(props.token, null).then(items=>{
      setLatestItems(items.data);
      for (let i = 0; i < items.data.length; i++) {
      //  console.log(items.data[i].category)
       console.log(items.data[i].category);
      
        
      
      // console.log(items.data)
      
    }
  })}, [])
  // console.log(latestItems.data)
  // console.log("----props--" + latestItems.category)
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
