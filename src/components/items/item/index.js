import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { CenterFocusStrong } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Item = ({ item }) => {

  const itemUrl = "/items/" + item.id;
  let itemImg;
  if (item.ItemImgs.length > 0) {
    itemImg = <CardMedia
      component="img"
      image={item.ItemImgs[0].url}
      className={styles.img}
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
        {/* need to fix the center of the card issue */}
        <Card className={styles.itemBox} style={{display:"flex", justifyContent:"center", alignContent:"center"}}> 
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
        </CardContent>
      </Card>
    </Link>
    </div >
  );
};

export default Item;
