import styles from "./styles.module.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Badge,
} from "@material-ui/core";
const ItemCard = ({ cardActionComponents }) => {
  return (
    <Card className={styles.itemWrapper} sx={{ width: "100%" }}>
      <CardMedia
        sx={{ width: "30%" }}
        component="img"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Badge badgeContent={"Available"} color="secondary">
          <Typography gutterBottom variant="h5" component="div">
            Goods Name
          </Typography>
        </Badge>
        <Typography variant="h6" color="text.secondary">
          category: xx
        </Typography>
        <Typography variant="h6" color="text.secondary">
          brand: xx
        </Typography>
        <Typography variant="h6" color="text.secondary">
          model: xx
        </Typography>
        <Typography variant="h6" color="text.secondary">
          condition: xx
        </Typography>
        <Typography variant="h6" color="text.secondary">
          age range: xx
        </Typography>
        <Typography variant="h6" color="text.secondary">
          description: xx
        </Typography>
        <CardActions>{cardActionComponents}</CardActions>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
