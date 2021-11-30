import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import styles from "./layout.module.css";
import Header from "./components/header";
import Profile from "./pages/profile";
// import ItemDetail from "./pages/itemDetail";
import AllItemDetail from "./pages/AllItemDetail";
import Signout from "./pages/signout";
function App() {
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
