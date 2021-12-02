import { Typography, Box, Button } from "@material-ui/core";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Items from "../../components/items";
import AddItem from "../../components/itemDialog";
import UserInfo from "./components/userInfo/index";
import { createItem } from "./services/request";
import styles from "./styles.module.css";
import { useAlert } from "react-alert";

const mockItems = [
  {
    id: 1,
    brand: "Gap",
    model: "n/a",
    ageRange: "0-6m",
    condition: "Used (like new)",
    title: "new born baby clothing",
    description: "10 cute baby girl one-piece",
    category: "Clothing, Shoes & Accessories",
    status: null,
    createdAt: "2021-11-27T13:25:40.000Z",
    updatedAt: "2021-11-27T13:25:40.000Z",
    UserId: 3,
    User: {
      id: 3,
      email: "Sharol@test.com",
      password: "$2b$05$GeQZMj5ufSFX1L1/EoQVC.9XPXd14vkmVlNoxs1s6Tjc6nDCl/T3e",
      firstName: "Sharol",
      lastName: "Liu",
      bio: "mom with 2 little girls",
      longitude: -122.343,
      latitude: 47.8,
      kidDOB: "2013-07-11T16:00:00.000Z",
      createdAt: "2021-11-27T13:25:40.000Z",
      updatedAt: "2021-11-27T13:25:40.000Z",
    },
  },
  {
    id: 2,
    brand: "Graco",
    model: "Blossom ",
    ageRange: "6-12m",
    condition: "Used (normal wear)",
    title: "highchair",
    description: "very useful highchair",
    category: "Nursery furniture & Decor",
    status: null,
    createdAt: "2021-11-27T13:25:40.000Z",
    updatedAt: "2021-11-27T13:25:40.000Z",
    UserId: 1,
    User: {
      id: 1,
      email: "becky@test.com",
      password: "$2b$05$AVUdkv/bpR8VZW2Pt.FV6ORVw7XOREJqhUxIhynUv2FW3jIzBm3q6",
      firstName: "Becky",
      lastName: "Newman",
      bio: "mom with 2 little girls",
      longitude: -122.307,
      latitude: 47.7854,
      kidDOB: "2018-01-14T16:00:00.000Z",
      createdAt: "2021-11-27T13:25:40.000Z",
      updatedAt: "2021-11-27T13:25:40.000Z",
    },
  },
];

const Profile = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!props.user.name) {
      navigate("/signin")
    }
  },[])
  const [openAddDiloag, setOpenAddDiloag] = useState(false);
    const handleClickAdd = () => {
      setOpenAddDiloag(true);
    };

  const handleSubmit = async (item) => {
    const res = await createItem(item);
    console.log(res);
    alert.success("Success to Create!");
    setOpenAddDiloag(false);
  };

  return (
    <div className={styles.wrapper}>
      <Typography variant="h4">Hi, {props.user.name}</Typography>
      <Box width="100%" marginTop="30px">
        <UserInfo />
      </Box>
      <Box width="100%" marginTop="20px">
        <Button variant="contained" onClick={handleClickAdd}>
          Add An Item
        </Button>
      </Box>
      <Box width="100%" marginTop="20px">
        <Typography variant="h6">Active Items</Typography>
        <Items items={mockItems} />
      </Box>
      <Box width="100%" marginTop="20px">
        <Typography variant="h6">Pending Items</Typography>
        <Items items={mockItems} />
      </Box>
      <Box width="100%" marginTop="20px">
        <Typography variant="h6">Gifted Items</Typography>
        <Items items={mockItems} />
      </Box>
      <AddItem
        open={openAddDiloag}
        onCancel={() => setOpenAddDiloag(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Profile;
