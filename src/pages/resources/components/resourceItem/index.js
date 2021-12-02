import { Button } from "@material-ui/core";
import styles from "./styles.module.css";
const ResourceItem = ({ name, link }) => {
  return (
    <div className={styles.wrapper}>
      <a href={link}>
        <Button>{name}</Button>
      </a>
    </div>
  );
};

export default ResourceItem;
