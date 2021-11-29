import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Checkbox,
} from "@material-ui/core";
import styles from "./styles.module.css";
const ItemDetail = () => {
  return (
    <div className={styles.wrapper}>
      <Box>
        <Card className={styles.itemWrapper}>
          <CardMedia
            component="img"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Goods Name
            </Typography>
            <Typography variant="h6" color="text.secondary">
              status: xx
            </Typography>
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
            <Button variant="contained" color="primary">
              Update
            </Button>
          </CardContent>
        </Card>
      </Box>
      <Box flexGrow="1">
        <Box display="flex" gap="20px">
          <Button variant="outlined">Upload</Button>
          <Button variant="outlined" color="error">
            Delete
          </Button>
        </Box>
        <Box display="flex" flexWrap="wrap">
          <div className={styles.itemImageBox}>
            <Checkbox className={styles.itemImageCheckbox} />
            <img
              className={styles.itemImage}
              src="https://www.vodafone.com.au/images/devices/apple/iphone-13-mini/iphone-13-mini-pink-feature1-m.jpg"
              alt=""
            />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ItemDetail;
