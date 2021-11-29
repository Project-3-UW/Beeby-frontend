import { Box } from "@material-ui/system";
import Item from "./item";
import styles from "./styles.module.css";
const Items = ({ items = [] }) => {
  const renderItems = () => {
    return items.map((item) => {
      return (
        <Box key={item.id} marginTop="20px" marginLeft="20px">
          <Item item={item}></Item>
        </Box>
      );
    });
  };
  return <div className={styles.wrapper}>{renderItems()}</div>;
};

export default Items;
