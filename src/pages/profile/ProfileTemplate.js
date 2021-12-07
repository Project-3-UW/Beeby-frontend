import { Typography, Box, Button, CardContent, Card, Switch, FormControl, FormControlLabel } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom";
import Items from "../../components/items";
import AddItem from "../../components/itemDialog";
import styles from "./styles.module.css";
import { useAlert } from "react-alert";
import API from "../../utils/API";
import Moment from 'react-moment'

const ProfileTemplate = () => {
  const userIdLocal = localStorage.getItem("userId");

  const [userState, setUserState] = useState({
    name: "",
    lastName: "",
    bio: "",
    createdAt: "",
    userImg: "",
    activeList: [],
    pendingList: [],
    giftedList: [],
  })
  const { id } = useParams()

  const [isSelfState, setIsSelfState] = useState(id !== userIdLocal)

  const alert = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    let currentProfileUserId;
    if (id) {
      //if params id available render this user
      currentProfileUserId = id;
      setIsSelfState(userIdLocal && userIdLocal === id)
    } else if (userIdLocal) {
      //if no parameter given, check if user logged in, if so render this user
      currentProfileUserId = userIdLocal
      setIsSelfState(true)
    } else {
      //if no user id provided, and not logged in, prompt to login
      setIsSelfState(false)
      navigate("/signin")
      return;
    }
    console.log("calling getuserbyid for id" + currentProfileUserId)
    API.getUserById(currentProfileUserId).then(res => {
      console.log(res)
      let profileImg = ""
      if(res.data.findUser.UserImg){
        profileImg = res.data.findUser.UserImg.url
      }
      console.log(profileImg)
      setUserState({
        // profileImg: res.data.findUser.Img,
        name: res.data.findUser.firstName,
        userImg: profileImg,
        lastName: res.data.findUser.lastName,
        bio: res.data.findUser.bio,
        createdAt: res.data.findUser.createdAt,
        activeList: res.data.activeList,
        pendingList: res.data.pendingList,
        giftedList: res.data.giftedList,
      })
    })

  }, [])
  const [openAddDiloag, setOpenAddDiloag] = useState(false);
  const handleClickAdd = () => {
    setOpenAddDiloag(true);
  };

  const handleSubmit = (item) => {
    console.log(item)
    API.createItem(item).then(res=>{
      console.log(res);
      alert.success("Success to Create!");
      setOpenAddDiloag(false);
    })

  };

  return (
    <div className={styles.wrapper}>
      {isSelfState ? (
        <Typography variant="h4">Hi, {userState.name}</Typography>
      ) : (
        <div></div>
      )}

      <Box width="100%" marginTop="30px">

        <Card className={styles.itemWrapper} sx={{ width: "100%" }}>
          <CardContent>
            <Typography variant="h6" color="text.secondary">
                <img
                  src={userState.userImg}
                  key={userState.userImg}
                  alt={userState.name}
                  className={styles.itemImage}
                  loading="lazy"
                />
              </Typography>
            <Typography variant="h6" color="text.secondary" styles="margin-top: 5px">
              Name: {userState.name} {userState.lastName}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Join Beeby since: <Moment format="MM/DD/YYYY">{userState.createdAt}</Moment>
            </Typography>
            <Typography variant="h6" color="text.secondary">
              About me: {userState.bio}
            </Typography>
          </CardContent>
        </Card>

      </Box>

      {isSelfState? (
      <Box width="100%" marginTop="20px">
        <Button variant="contained" onClick={handleClickAdd}>
          Add An Item
        </Button>
      </Box>):(
        <div></div>
      )}

      {userState.activeList.length > 0 ? (
        <Box width="100%" marginTop="20px">
          <Typography variant="h6">Active Items</Typography>
          <Items items={userState.activeList} />
        </Box>
      ) : (
        <div></div>
      )}

      {userState.pendingList.length > 0 ? (
        <Box width="100%" marginTop="20px">
          <Typography variant="h6">Pending Items</Typography>
          <Items items={userState.pendingList} />
        </Box>
      ) : (
        <div></div>
      )}

      {userState.giftedList.length > 0 ? (
        <Box width="100%" marginTop="20px">
          <Typography variant="h6">Gifted Items</Typography>
          <Items items={userState.giftedList} />
        </Box>
      ) : (
        <div></div>
      )}
      <AddItem
        open={openAddDiloag}
        onCancel={() => setOpenAddDiloag(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ProfileTemplate;
