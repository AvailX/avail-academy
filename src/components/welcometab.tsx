import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  InputAdornment,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  // Use useState to manage the user's name
  const [userName, setUserName] = useState("Nick");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#F50369", // Adjust color to match your theme
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#FFFFFF",
          flexGrow: 1, // Ensures space between the greeting and icons
        }}
      >
        Welcome Back, <strong>{userName}</strong>
      </Typography>

      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#4C0423",
            borderRadius: "50%", // Makes the background circular
            padding: "8px", // Ensures the icon fits well within the circle
          }}
        >
          <LanguageIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#4C0423",
            borderRadius: "50%",
            padding: "8px",
          }}
        >
          <SettingsIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#4C0423",
            borderRadius: "50%",
            padding: "8px",
          }}
        >
          <NotificationsIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          //   backgroundColor: "rgba(255, 255, 255, 0.1)",
          backgroundColor: "#4C0423",
          padding: "5px 10px",
          borderRadius: "15px",
          marginLeft: "10px",
        }}
      >
        <InputBase
          //   placeholder="Search..."
          sx={{
            color: "#FFFFFF",
            paddingLeft: "8px",
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#FFFFFF" }} />
            </InputAdornment>
          }
        />
      </Box>
    </Box>
  );
};

export default Header;
