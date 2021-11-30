
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/home";
import Explore from "./pages/explore";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import styles from "./layout.module.css";
import Header from "./components/header";
import Profile from "./pages/profile";
import API from "./utils/API"
import ItemDetail from "./pages/itemDetail";
import AllItemDetail from "./pages/AllItemDetail";
import Signout from "./pages/signout";
// eslint-disable-next-line

function App() {
  // eslint-disable-next-line
  const [userState, setUserState] = useState({
    email:"",
    id:0
  })

// eslint-disable-next-line
  const [token, setToken] = useState("")

  const [loginFormState, setLoginFormState] = useState ({
    email:"",
    password:"",
  });

  const [signupFormState, setSignupFormState] = useState ({
    email:"",
    password:""
  });

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    if(myToken){
      API.validateToken(myToken)
      .then(res => {
        setToken(myToken)
        console.log("token valid")
        // setUserState({
        //   email:res.user.email,
        //   id:res.user.id
        // })
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

  const handleLoginChange = (event) => {
    if (event.target.name === "email") {
      setLoginFormState({
        ...loginFormState,
        email: event.target.value,
      });
    } else {
      setLoginFormState({
        ...loginFormState,
        password: event.target.value,
      });
    } 
  };

  const handleSignupChange = (event) => {
    if (event.target.name === "email") {
      setSignupFormState({
        ...signupFormState,
        email: event.target.value,
      });
    } else {
      setSignupFormState({
        ...signupFormState,
        password: event.target.value,
      });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormState)
    API.login(loginFormState)
      .then((res) => {
        console.log(res);
        // setUserState({
        //   email:res.user.email,
        //   id:res.user.id
        // })
        setToken(res.data.token)
        console.log(res.data.token)
        localStorage.setItem("token", res.data.token)
        window.location.href = "/"
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    API.signup(signupFormState).then(res => {
      API.login(signupFormState)
      .then((res) => {
        console.log(res);
        setUserState({
          email:res.user.email,
          id:res.user.id
        })
        setToken(res.token)
        localStorage.setItem("token", res.token)
      })
      .catch((err) => {
        console.log(err);
      });
    })
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
            <Route path="/" element={<Home getItems={getItems} />} />
            <Route path="/explore" element={<Explore />} />

            <Route path="/explore/items/" element={<AllItemDetail />} />

            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/profile/items/:id" element={<ItemDetail />} /> */}
            <Route path="/signup" element={<SignUp submit={handleSignupSubmit} change={handleSignupChange} signupState={signupFormState} />}/>
            <Route path="/signin" element={<SignIn  submit={handleLoginSubmit} change={handleLoginChange} loginState={loginFormState}/>} />
            <Route path="/signout" element={<Signout onClick = {userLogout}/>} />
          </Routes>
        </div>
        <div className={styles.footer}></div>
      </div>
    </Router>
  );
}

export default App;
