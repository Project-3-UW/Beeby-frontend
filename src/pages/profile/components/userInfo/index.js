import { useState } from "react";
import styles from "./styles.module.css";
import {
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  Switch,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  Box,
  Input,
} from "@material-ui/core";

const ariaLabel = {'aria-label': 'description'}

const babyAgeRange = [
  "0-6m",
  "6-12m",
  "12-18m",
  "18-24m",
  "2-3 years",
  "3-4 years",
  "4 years and up",
];
const UserInfo = () => {
  const [babyAge, setBabyAge] = useState("0-6m");
  const renderBabyRange = () => {
    return babyAgeRange.map((range) => {
      return (
        <MenuItem value={range} key={range}>
          {range}
        </MenuItem>
      );
    });
  };
  return (
    <Card className={styles.info}>
      <CardContent>
        <Typography variant="h5">Personal Information</Typography>
      </CardContent>
      <CardActions>
        <FormControl>
          <FormControlLabel control={<Switch />} label="Location" />
          {/* <FormControlLabel control={<Switch />} label="Notification" /> */}
          {/* <Box marginTop="20px">
            <FormControl fullWidth>
              <InputLabel id="age-range">Baby Age Range</InputLabel>
              <Select
                size="small"
                labelId="age-range"
                label="Baby Age"
                value={babyAge}
                onChange={(e) => setBabyAge(e.target.value)}
              >
                {renderBabyRange()}
              // </Select>
            </FormControl>
          </Box> */}
        </FormControl>
      </CardActions>
    </Card>
  );
};

export default UserInfo;
