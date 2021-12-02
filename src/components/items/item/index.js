import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";

const Item = ({ item }) => {

  return (
    
    <div className={styles.wrapper}>
      <Link to="/items/4">
        <Card className={styles.itemBox}>
          <CardMedia
            component="img"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography
              className={styles.title}
              variant="h5"
              gutterBottom
              component="div"
            >
              {item.title}
            </Typography>
            <Typography
              className={styles.description}
              variant="body2"
              textOverflow="ellipsis"
              color="text.secondary"
            >
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <Card className={styles.itemBox}>
        <CardMedia
          component="img"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            textOverflow="ellipsis"
            color="text.secondary"
          >
            {/* {item.description} */}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Item;
