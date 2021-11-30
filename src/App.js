
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
    password:""
  });

  const [signupFormState, setSignupFormState] = useState ({
    email:"",
    password:""
  });

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    if(myToken){
      API.getProfile(myToken)
      .then(res => {
        setToken(myToken)
        setUserState({
          email:res.data.user.email,
          id:res.data.id
        })
      }).catch(err =>{
        console.log(err)
        localStorage.removeItem("token")
      })
    }
  })

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
    API.login(loginFormState)
      .then((res) => {
        console.log(res.data);
        setUserState({
          email:res.data.user.email,
          id:res.data.user.id
        })
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
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
        console.log(res.data);
        setUserState({
          email:res.data.user.email,
          id:res.data.user.id
        })
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
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
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />

            <Route path="/explore/items/" element={<AllItemDetail />} />

            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/profile/items/:id" element={<ItemDetail />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signout" element={<Signout />} />
          </Routes>
        </div>
        <div className={styles.footer}></div>
      </div>
    </Router>
  );
}

export default App;
