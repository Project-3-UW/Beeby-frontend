import { Box } from "@material-ui/system";
import Items from "../../components/items";
import Querier from "./components/querier";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import API from "../../utils/API"
import calculateDistance from "../../utils/distanceUtil"

const Explore = (props) => {

  const currentUserId = localStorage.getItem("userId");
  const alert = useAlert();


  const [filterState, setFilterState] = useState({
    distance: "",
    category: "",
    condition: "",
    age: "",
  });

  const [currentUserLocation, setCurrentUserLocation] = useState({
    longitude: 0,
    latitude: 0
  });

  //original copy of all items
  const [latestItems, setLatestItems] = useState([]);

  //filtered items to display
  const [filteredItems, setFilteredItems] = useState([]);

  const checkDistance = (withinRange, item) => {
    return calculateDistance(currentUserLocation.longitude, currentUserLocation.latitude, item.User.longitude, item.User.latitude) < withinRange
  }

  const handleFilterOptionChange = async (key,value)=>{
    filterState[key] = value;
    let currentFilterState = filterState;
    currentFilterState[key] = value;
    setFilterState(currentFilterState);
    console.log("======= option changed")

    let currentFilterdItems = await latestItems.filter((item)=>{
      let conditionNotSelected = true, categoryNotSelected = true, ageNotSelected = true, distanceNotSelected = true;
      if(filterState.condition.length > 0) {
        conditionNotSelected = false
      }
      if(filterState.category.length > 0) {
        categoryNotSelected = false
      }
      if(filterState.age.length > 0) {
        ageNotSelected = false
      }
      if(filterState.distance.length > 0) {
        distanceNotSelected = false
      }

      return  (conditionNotSelected || item.condition == filterState.condition) &&
              (categoryNotSelected || item.category == filterState.category) &&
              (ageNotSelected || item.ageRange == filterState.age) && 
              (distanceNotSelected || checkDistance(filterState.distance, item))
    })

    console.log("======= data filtered")
    setFilteredItems(currentFilterdItems);
  }

  //data retrieval during page load
  useEffect(() => {
    //get all items
    API.getItems(props.token, null).then(items=>{
      setLatestItems(items.data);
      setFilteredItems(items.data);
    })

    //get location for current logged in user
    if(currentUserId && currentUserId.length>0) {
      API.getUserLocation(currentUserId).then(loc=>{
        setCurrentUserLocation(loc.data);
      }).catch(err=> {
        //user not logged in or failed to get user location
        console.log(err)
      })
    }

  }, []);

  return (
    <div className={styles.wrapper}>
      <Box height="100%">
        <Querier changeQueryHandler={handleFilterOptionChange} />
      </Box>
      <Box height="100%" width="50%">
      <Items items={filteredItems} />
      </Box>
    </div>
  );
};

export default Explore;
