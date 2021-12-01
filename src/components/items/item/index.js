import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
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
    </div>
  );
};

export default Item;
