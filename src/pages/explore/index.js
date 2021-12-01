import { Box } from "@material-ui/system";
import Items from "../../components/items";
import Querier from "./components/querier";
import styles from "./styles.module.css";

const Explore = () => {
  return (
    <div className={styles.wrapper}>
      <Box height="100%">
        <Querier />
      </Box>
      <Box height="100%" width="50%">
        <Items />
      </Box>
    </div>
  );
};

export default Explore;
