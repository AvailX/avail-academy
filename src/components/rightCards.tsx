import React from "react";
import { Box, Typography } from "@mui/material";

interface ComingSoonCardProps {
  imageUrl?: string;
  text?: string;
}

const RightCard: React.FC<ComingSoonCardProps> = ({ imageUrl, text }) => {
  return (
    <Box
      sx={{
        width: "180px",
        height: "290px",
        backgroundColor: "#0000004D",
        borderRadius: "26px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Box
        sx={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          overflow: "hidden",
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Circular content"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            {text || "Coming Soon"}
          </Typography>
        )}
      </Box>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "20px",
          color: "#D9D9D96B",
          textAlign: "center",
        }}
      >
        {text || "Coming Soon"}
      </Typography>
    </Box>
  );
};

export default RightCard;
