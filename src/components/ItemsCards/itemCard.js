// ADDED by DeAnna

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


const ItemCard = (props) => {

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
                {props.title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Status: {props.status}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Category: {props.category}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Brand: {props.brand}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Model: {props.model}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Condition: {props.condition}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Ages: {props.ageRange}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Description: {props.description}
              </Typography>
              <Button variant="contained" color="primary">
                Update
              </Button>
              <Button variant="contained" color="primary">
                Please consider me
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
                src="{https://www.vodafone.com.au/images/devices/apple/iphone-13-mini/iphone-13-mini-pink-feature1-m.jpg}"
                alt=""
              />
            </div>
          </Box>
        </Box>
      </div>
    );
  };

  export default ItemCard;