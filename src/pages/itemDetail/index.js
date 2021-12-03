import ItemCard from "../../components/itemCard";
import { useParams, Link  } from 'react-router-dom'
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Badge,
  Box, Button
} from "@material-ui/core";


const ItemDetail = ({ user }) => {
  const { id } = useParams()

  const [itemState, setItemState] = useState({
    title: "",
    ItemImgs: [],
    itemImagesData: [],
    description: "",
    category: "",
    brand: "",
    model: "",
    condition: "",
    ageRange: "",
    createdAt: "",
    User: {
      firstName: "",
      lastName: "",
      UserImg: {
        url: "",
        id: ""
      }
    }
  })

  useEffect(() => {
    API.getItemById(id).then(res => {
      let itemStateData = res.data;
      console.log(res.data)
      let updatedItemImages = res.data.ItemImgs.map((img) => {
        return <img
          src={img.url}
          key={img.id}
          alt={itemState.title}
          className={styles.itemImage}
          loading="lazy"
        />
      })
      itemStateData.itemImagesData = updatedItemImages;
      setItemState(itemStateData);
    })

  }, [])

  return (
    <div className={styles.wrapper}>
      <Badge badgeContent={"Available"} color="secondary">
        <Typography variant="h3" textAlign="center" component="h1">
          {itemState.title}
        </Typography>
      </Badge>
      <Box width="100%">
        {/* <Typography variant="h4">Photos</Typography> */}
        <Box width="100%" display="flex" flexWrap="wrap">
          {itemState.itemImagesData}
        </Box>
      </Box>
      <Box width="100%" gap="100px">
        <Box>
          {/* <Typography variant="h4">Details</Typography> */}
          <Card className={styles.itemWrapper} sx={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary">
                Description: {itemState.description}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Category: {itemState.category}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Brand: {itemState.brand}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Model: {itemState.model}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Condition: {itemState.condition}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Age range: {itemState.ageRange}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Item Posted: {itemState.createdAt}
              </Typography>
              <Link to={"/profile/" + itemState.User.id}>
              <Typography variant="h6" color="text.secondary">
                Posted By: {itemState.User.firstName} {itemState.User.lastName}
                <img
                  src={itemState.User.UserImg.url}
                  key={itemState.User.UserImg.id}
                  alt={itemState.title}
                  className={styles.itemImage}
                  loading="lazy"
                />
              </Typography>
              </Link>
              <CardActions><Button variant="contained">I want it!</Button></CardActions>
            </CardContent>
          </Card>
        </Box>

      </Box>
    </div>
  );
};

export default ItemDetail;
