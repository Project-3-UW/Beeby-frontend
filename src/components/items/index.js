import { Box } from "@material-ui/system";
import React, { useEffect, useState } from "react";
import Item from "./item";
import styles from "./styles.module.css";
const Items = ({ items = [] }) => {

  const renderItems = () => {
    if(items.length > 0) {
    return items.map((item) => {
        return (
          <Box key={item.id} marginTop="20px" marginLeft="20px">
            <Item item={item}></Item>
          </Box>
        );
      });
    } else {
      return null
    }
  };

  return <div className={styles.wrapper}>{renderItems()}</div>;
};

export default Items;
