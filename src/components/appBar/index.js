import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/image/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../auth";
const navsData = [
  { label: "Home", path: "/" },
  { label: "Explore", path: "/explore" },
  { label: "Profile", path: "/profile" },
  { label: "Resouces", path: "/resources" },
  { label: "Coupons", path: "/coupons" },
];
const ResponsiveAppBar = () => {
  const { pathname } = useLocation();
  const { authenticated } = useAuth();
  const [navs, setNavs] = React.useState(navsData);
  React.useEffect(() => {
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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: "white", color: "#333" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img alt="logo" src={logo} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navs.map((nav) => (
                <MenuItem key={nav.label}>
                  <Link to={nav.path}>
                    <Typography textAlign="center">{nav.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img alt="logo" src={logo} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", gap: "35px" },
            }}
          >
            {navs.map((nav) => (
              <Link to={nav.path}>
                <Button
                  style={{ color: "#333" }}
                  key={nav.label}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {nav.label}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {navs.map((nav) => (
                <MenuItem key={nav.label}>
                  <Typography textAlign="center">{nav.path}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
