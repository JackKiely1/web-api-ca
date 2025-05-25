import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// new import for auth context
import { AuthContext } from "../../contexts/authContext"; 

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#6A1B9A"
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  letterSpacing: "0.5px",
}));

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [homeMenuEl, setHomeMenuEl] = useState(null);
  const [playlistMenuEl, setPlaylistMenuEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const context = useContext(AuthContext); // access auth status

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
    setHomeMenuEl(null);
    setPlaylistMenuEl(null);
  };

  return (
    <>
      <CustomAppBar position="fixed" color="secondary">
        <Toolbar>
          <CustomTypography variant="h5" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")} >
            TMDB Client
          </CustomTypography>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(e) => setAnchorEl(e.currentTarget)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleMenuSelect("/discover")}>Discover</MenuItem>
                <MenuItem onClick={() => handleMenuSelect("/movies/upcoming")}>
                  Upcoming
                </MenuItem>
                <MenuItem onClick={() => handleMenuSelect("/movies/topRated")}>
                  Top Rated
                </MenuItem>
                <MenuItem onClick={() => handleMenuSelect("/movies/popular")}>
                  Popular
                </MenuItem>
                <MenuItem onClick={() => handleMenuSelect("/movies/watchlist")}>
                  Watchlist
                </MenuItem>
                <MenuItem onClick={() => handleMenuSelect("/movies/favorites")}>
                  Favorites
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              {/* New Home dropdown */}
              <Button
                color="inherit"
                onClick={(e) => setHomeMenuEl(e.currentTarget)}
              >
                Discover Movies
              </Button>
              <Menu
                anchorEl={homeMenuEl}
                open={Boolean(homeMenuEl)}
                onClose={() => setHomeMenuEl(null)}
              >
                <MenuItem onClick={() => handleMenuSelect("/discover")}>Discover</MenuItem>
                <MenuItem onClick={() => handleMenuSelect("/movies/upcoming")}>
                  Upcoming
                </MenuItem>
                <MenuItem onClick={() => handleMenuSelect("/movies/topRated")}>
                  Top Rated
                </MenuItem>
                <MenuItem onClick={() => handleMenuSelect("/movies/popular")}>
                  Popular
                </MenuItem>
              </Menu>

              {/* New Playlist Dropdown */}
              <Button
                color="inherit"
                onClick={(e) => setPlaylistMenuEl(e.currentTarget)}
              >
                Playlists
              </Button>
              <Menu
                anchorEl={playlistMenuEl}
                open={Boolean(playlistMenuEl)}
                onClose={() => setPlaylistMenuEl(null)}
              >
                <MenuItem onClick={() => handleMenuSelect("/movies/watchlist")}>
                  Watchlist
                </MenuItem>
                <MenuItem onClick={() => handleMenuSelect("/movies/favorites")}>
                  Favorites
                </MenuItem>
              </Menu>
            </>
          )}

          {/* Auth buttons block visability */}
          {context.isAuthenticated ? (
            <>
              <Typography variant="body1" sx={{ marginLeft: 2 }}>
                Welcome, {context.userName}
              </Typography>
              <Button color="inherit" onClick={() => context.signout()}>
                Sign out
              </Button>
              <Button color="inherit" onClick={() => navigate("/profile")}>
                Profile
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button color="inherit" onClick={() => navigate("/signup")}>
                Signup
              </Button>
            </>
          )}

        </Toolbar>
      </CustomAppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
