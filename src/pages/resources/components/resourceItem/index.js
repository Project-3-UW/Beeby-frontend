import { Button } from "@material-ui/core";
import styles from "./styles.module.css";
const ResourceItem = ({ name, link }) => {
  return (
    <div className={styles.wrapper}>
      <a href={link} target="_blank">
      <Button style={{ color: "#72625d" }}>{name}</Button>      </a>
    </div>
  );
};

export default ResourceItem;
