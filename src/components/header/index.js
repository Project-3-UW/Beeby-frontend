import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../auth";
import styles from "./styles.module.css";
import headerBackground from "../../assets/image/header-bg.jpg";
const navsData = [
  { label: "Home", path: "/" },
  { label: "Explore", path: "/explore" },
  { label: "Profile", path: "/profile" },
  { label: "Resouces", path: "/resources" },
  { label: "Coupons", path: "/coupons" },
];

const Header = () => {
  const { pathname } = useLocation();
  const { authenticated } = useAuth();
  const [navs, setNavs] = useState(navsData);
  useEffect(() => {
    setNavs([
      ...navsData,
      !authenticated
        ? { label: "Login", path: "/signin" }
        : {
            label: "Logout",
            path: "/signout",
          },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  const renderNavs = () => {
    return navs.map((nav) => {
      const buttonVariant = pathname === nav.path ? "contained" : "text";
      return (
        <Link to={nav.path} key={nav.label}>
          <Button variant={buttonVariant}>{nav.label}</Button>
        </Link>
      );
    });
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        background: `url(${headerBackground})`,
        backgroundSize: "100%",
        backgroundPosition: "0 -250px",
      }}
    >
      {renderNavs()}
    </div>
  );
};

export default Header;
