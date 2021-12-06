import { Card, CardMedia, Grid } from "@material-ui/core";
import styles from "./styles.module.css";

import support1 from "../../assets/image/support1.jpg";
import support2 from "../../assets/image/support2.jpg";
import support3 from "../../assets/image/support3.jpg";
import support4 from "../../assets/image/support4.jpg";
import support5 from "../../assets/image/support5.jpg";
import support6 from "../../assets/image/support6.jpg";

const Coupons = () => {
  const supporters = [
    { poster: support1, link: "https://childishresale.com/" },
    { poster: support2, link: "https://shopclovertoys.com/" },
    { poster: support3, link: "https://villagematernity.com/" },
    { poster: support4, link: "https://littlebipsy.com/" },
    { poster: support5, link: "https://www.nurturingexpressions.com/" },
    { poster: support6, link: "https://www.sandracoan.com/" },
  ];
  const renderSupporters = () => {
    return supporters.map((supporter) => {
      return (
        <Grid key={supporter.link} item xs={12} lg={4}>
          <Card className={styles.supporterCard} key={supporter.link}>
            <a href={supporter.link} alt="">
              <CardMedia component="img" width="100%" image={supporter.poster} />
            </a>
          </Card>
        </Grid>
      );
    });
  };
  return <div className={styles.wrapper}>{renderSupporters()}</div>;
};

export default Coupons;
