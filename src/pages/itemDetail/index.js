import { Typography, Box, Button } from "@material-ui/core";
import ItemCard from "../../components/itemCard";
import styles from "./styles.module.css";
import API from "../../utils/API"

const ItemDetail = () => {

  //use API.getItemById(id) to retrieve item detail

  const images = [
    "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=242&h=121&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=121&h=121&fit=crop&auto=format",
  ];
  const renderImages = () => {
    return images.map((image) => {
      return (
        <img
          src={image}
          key={image}
          alt=""
          className={styles.itemImage}
          loading="lazy"
        />
      );
    });
  };
  return (
    <div className={styles.wrapper}>
      <Typography variant="h3" textAlign="center" component="h1">
        Item Details
      </Typography>
      <Box width="100%" gap="100px">
        <Box>
          <Typography variant="h4">Details</Typography>
          <ItemCard
            cardActionComponents={
              <Button variant="contained">I want it!</Button>
            }
          />
        </Box>
        <Box width="100%">
          <Typography variant="h4">Photos</Typography>
          <Box width="100%" display="flex" flexWrap="wrap">
            {renderImages()}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ItemDetail;
