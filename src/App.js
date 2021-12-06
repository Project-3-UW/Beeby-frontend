import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import styles from "./layout.module.css";
import Profile from "./pages/profile";
import ProfileById from "./pages/profile/profileById";
import Signout from "./pages/signout";
import ItemDetail from "./pages/itemDetail";
import Resources from "./pages/resources";
import Coupons from "./pages/coupons";
import React, { useEffect, useState } from "react";
import API from "./utils/API";
import ResponsiveAppBar from "./components/appBar";
function App() {
  // eslint-disable-next-line
  const [userState, setUserState] = useState({})

// eslint-disable-next-line
  const [token, setToken] = useState("")

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if(myToken && userId){
      API.validateToken()
      .then(res => {
        console.log(res)
        setToken(myToken)
        setUserState({
          email:res.data.email,
          id:res.data.id,
          name: res.data.firstName
        })
        console.log("token valid")
      }).catch(err =>{
        console.log(err)
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
      })
    }
  },[])

  const userLogout = () => {
    setUserState({email:"",id:0})
    setToken("")
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
  }

  return (
    <Router>
      <div className={styles.wrapper}>
        <div className={styles.header}>
        <ResponsiveAppBar />
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items/:id" element={<ItemDetail user={userState} />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/explore" element={<Explore token={token}/>} />

            <Route path="/profile/" element={<Profile />} />
            <Route path="/profile/:id" element={<ProfileById />} />
            <Route path="/profile/items/:id" element={<ItemDetail />} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<Signout onClick = {userLogout}/>} />
          </Routes>
        </div>
        <div className={styles.footer}></div>
      </div>
    </Router>
  );
}

export default App;
