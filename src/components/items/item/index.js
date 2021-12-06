import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Item = ({ item }) => {

  const itemUrl = "/items/" + item.id;
  let itemImg;
  if (item.ItemImgs.length > 0) {
    itemImg = <CardMedia
      component="img"
      image={item.ItemImgs[0].url}
    />;
  } else {
    itemImg = <CardMedia
      component="img"
      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
    />
  }

  return (
    <div className={styles.wrapper}>
      <Link to={itemUrl}>
        <Card className={styles.itemBox}>
        <CardContent>
          {itemImg}
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
            {/* {item.description} */}
          </Typography>
        </CardContent>
      </Card>
    </Link>
    </div >
  );
};

export default Item;
