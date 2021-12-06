import { useParams, Link } from 'react-router-dom'
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Badge,
  Box,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Button,
  Avatar,
  Grid
} from "@material-ui/core";


const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

const ItemDetail = ({ user }) => {
  const userIdLocal = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [isSelfState, setIsSelfState] = useState(false)

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
    status: "",
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

  const [status, setStatus] = useState(itemState.status || "");

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
      if (!res.data.status || res.data.status.length === 0) {
        itemStateData.status = "available"
      }

      if (userIdLocal) {
        setIsSelfState(userIdLocal == res.data.UserId)
      }
      setStatus(itemStateData.status)
      setItemState(itemStateData);
    })

  }, [])

  const handleUpdateStatus = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
    //call API to update item status in database
    API.updateItemStatus(itemState.id, e.target.value, token).then(res => {
      //alert
      setStatus(e.target.value);
    })
  }

  return (
    <div className={styles.wrapper}>
        <Typography variant="h3" textAlign="center" component="h1" className={styles.title}>
          {itemState.title}
        </Typography> 
        <Grid>    
         <Badge badgeContent={status} color="secondary" className={styles.badge}>
      </Badge>
      </Grid>
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

              {isSelfState ? (
                <FormControl component="fieldset" className={styles.formControl}>
                  <FormLabel component="legend" className={styles.formItem}>
                    Item Status
                  </FormLabel>
                  <Select
                    size="small"
                    value={status}
                    onChange={handleUpdateStatus}
                  >
                    <MenuItem value={`available`}>Available</MenuItem>
                    <MenuItem value={`pending`}>Pending</MenuItem>
                    <MenuItem value={`gifted`}>Gifted</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <>
                <Link to={"/profile/" + itemState.User.id}>
                <Typography
                      variant="h6"
                      display="flex"
                      color="text.secondary"
                    >
                      <span>Posted By:</span>
                      <Avatar
                        style={{ marginLeft: "15px", marginRight: "15px" }}
                        src={itemState.User.UserImg.url}
                        key={itemState.User.UserImg.id}
                        alt={itemState.title}
                        loading="lazy" />
                      <span>
                        {itemState.User.firstName} {itemState.User.lastName}
                      </span>
                  </Typography>

                  </Link><CardActions><Button variant="contained">
                    <Mailto email={itemState.User.email} subject="I am interested in your item!" body={`Hello! I am interested in your item, ${itemState.title}! Please email me back so we can discuss a time and place to meet.`}>
                      I want it!
                    </Mailto>
                  </Button></CardActions>
                </>
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default ItemDetail;
