import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import styles from "./styles.module.css";
const Item = ({ item }) => {
  return (
    <div className={styles.wrapper}>
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
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Item;
