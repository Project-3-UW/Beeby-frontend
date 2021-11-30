import {
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  Switch,
  Typography,
} from "@material-ui/core";
import styles from "./styles.module.css";

const UserInfo = () => {
  return (
    <Card className={styles.info}>
      <CardContent>
        <Typography variant="h5">Settings</Typography>
      </CardContent>
      <CardActions>
        <FormControl>
          <FormControlLabel control={<Switch />} label="Location" />
          {/* <FormControlLabel control={<Switch />} label="Notification" /> */}
        </FormControl>
      </CardActions>
    </Card>
  );
};

export default UserInfo;
