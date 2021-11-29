import { Typography, Box, Button } from "@material-ui/core";
import Items from "../../components/items";
import UserInfo from "./components/userInfo/index";
import styles from "./styles.module.css";
const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <Typography variant="h4">Hi, User</Typography>
      <Box width="100%" marginTop="30px">
        <UserInfo />
      </Box>
      <Box width="100%" marginTop="20px">
        <Button variant="contained">Add An Item</Button>
      </Box>
      <Box width="100%" marginTop="20px">
        <Typography variant="h6">Active Items</Typography>
        <Items />
      </Box>
      <Box width="100%" marginTop="20px">
        <Typography variant="h6">Pending Items</Typography>
        <Items />
      </Box>
      <Box width="100%" marginTop="20px">
        <Typography variant="h6">Gifted Items</Typography>
        <Items />
      </Box>
    </div>
  );
};

export default Profile;
