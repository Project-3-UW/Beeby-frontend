import { Typography, Box, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Items from "../../components/items";
import UserInfo from "./components/userInfo/index";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!props.user.name) {
      navigate("/signin")
    }
  },[])

  return (
    <div className={styles.wrapper}>
      <Typography variant="h4">Hi, {props.user.name}</Typography>
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
