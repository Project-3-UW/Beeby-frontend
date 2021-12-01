import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import styles from "./layout.module.css";
import Header from "./components/header";
import Profile from "./pages/profile";
import EditItem from "./pages/editItem";
import Signout from "./pages/signout";
import ItemDetail from "./pages/itemDetail";
import Resources from "./pages/resources";
import Coupons from "./pages/coupons";
import React, { useEffect, useState } from "react";
import API from "./utils/API"
function App() {
  // eslint-disable-next-line
  const [userState, setUserState] = useState({})

// eslint-disable-next-line
  const [token, setToken] = useState("")

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    if(myToken){
      API.validateToken(myToken)
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
      })
    }
  },[])

  const getItems = () =>{
    //check if token valid, if so call api with token, otherwise 
    //API also support to pass custom lon/lat data

    if(token && token.length> 0) {//check if token valid
      API.getItems(token, null)
    } else {
      //if user not logged in, prompt for current location
      const cordinates = {
        lon: 122, //replace with actual value if needed.
        lat: 47 //replace with actual value if needed.
      }
      API.getItems(null, cordinates)
    }
  }


  const userLogout = () => {
    setUserState({email:"",id:0})
    setToken("")
    localStorage.removeItem("token")
  }

  return (
    <Router>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/profile/edit/items/:id" element={<EditItem />} /> */}
            <Route path="/items/:id" element={<ItemDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/explore" element={<Explore getItems={API.getItems}/>} />

            {/* <Route path="/explore/items/" element={<AllItemDetail />} /> */}

            <Route path="/profile" element={<Profile user={userState} />} />
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
