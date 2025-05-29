import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/user-context";

const defaultNavigationItems = [
  { text: "Home", to: "/" },
  { text: "Pricing", to: "/pricing" },
  { text: "About", to: "/about" },
  { text: "Security", to: "/security" },
  { text: "Contact", to: "/contact" }
];

const authNavigationItems = [
  { text: "Profile", to: "/profile" },
  { text: "Logout", to: "/logout" },
];

const guestNavigationItems = [
  { text: "Login", to: "/login" },
  { text: "Register", to: "/register" },
];

export const Navigation: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const { isLoggedIn, logout } = useContext(UserContext);

  useEffect(() => {
    if (isDesktop && drawerOpen) {
      setDrawerOpen(false);
    }
  }, [isDesktop, drawerOpen]);


  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleLogoutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      {/* Desktop Navigation */}
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
        {defaultNavigationItems.map(({ to, text }) => (
          <Link key={to} to={to} style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              size="large"
              sx={{
                color: "#ffffff",
                "&:hover": { color: "#19C5C1" },
                "&:focus": { outline: "none", boxShadow: "none" },
                textTransform: "none",
              }}
            >
              {text}
            </Button>
          </Link>
        ))}

        {isLoggedIn
          ? authNavigationItems.map(({ to, text }) =>
            text === "Logout" ? (
              <Button
                key={to}
                color="inherit"
                size="large"
                sx={{
                  color: "#ffffff",
                  "&:hover": { color: "#19C5C1" },
                  "&:focus": { outline: "none", boxShadow: "none" },
                  textTransform: "none",
                }}
                onClick={handleLogoutClick}
              >
                {text}
              </Button>
            ) : (
              <Link key={to} to={to} style={{ textDecoration: "none" }}>
                <Button
                  color="inherit"
                  size="large"
                  sx={{
                    color: "#ffffff",
                    "&:hover": { color: "#19C5C1" },
                    "&:focus": { outline: "none", boxShadow: "none" },
                    textTransform: "none",
                  }}
                >
                  {text}
                </Button>
              </Link>
            )
          )
          : guestNavigationItems.map(({ to, text }) => (
            <Link key={to} to={to} style={{ textDecoration: "none" }}>
              <Button
                color="inherit"
                size="large"
                sx={{
                  color: "#ffffff",
                  "&:hover": { color: "#19C5C1" },
                  "&:focus": { outline: "none", boxShadow: "none" },
                  textTransform: "none",
                }}
              >
                {text}
              </Button>
            </Link>
          ))}
      </Box>

      {/* Mobile Hamburger Button */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleDrawerToggle}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer Menu for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            backgroundColor: "#0a2e36",
            color: "#ffffff",
            width: 250,
          },
        }}
      >
        <List>
          {defaultNavigationItems.map(({ to, text }) => (
            <AnchorLink
              key={to}
              href={`#${to}`}
              onClick={handleDrawerToggle}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemText primary={text} />
              </ListItemButton>
            </AnchorLink>
          ))}

          {isLoggedIn
            ? authNavigationItems.map(({ to, text }) =>
              text === "Logout" ? (
                <ListItemButton key={to} onClick={() => { logout(); setDrawerOpen(false); }}>
                  <ListItemText primary={text} />
                </ListItemButton>
              ) : (
                <AnchorLink
                  key={to}
                  href={`#${to}`}
                  onClick={() => setDrawerOpen(false)}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </AnchorLink>
              )
            )
            : guestNavigationItems.map(({ to, text }) => (
              <AnchorLink
                key={to}
                href={`#${to}`}
                onClick={handleDrawerToggle}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton onClick={handleDrawerToggle}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </AnchorLink>
            ))}
        </List>
      </Drawer>
    </>
  );
};
