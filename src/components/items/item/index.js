import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const Item = ({ item }) => {
  return (
    
    <div className={styles.wrapper}>
<<<<<<< HEAD
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
=======
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
>>>>>>> aaaa9df95e187e220016c21942d3ec6a45021aa6
    </div>
  );
};

export default Item;
