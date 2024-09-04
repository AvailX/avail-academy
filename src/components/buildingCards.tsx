// CardComponent.js
import React from "react";
import { Typography, Box } from "@mui/material";
import arrow from "../assets/arrow-right-circle.svg";

interface CardProps {
  title: string;
  description?: string;
  badgeText?: string;
  backgroundImage?: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  badgeText,
  backgroundImage,
}) => {
  return (
    <Box
      sx={{
        width: 214,
        height: "auto",
        borderRadius: "26px",
        background: backgroundImage
          ? `url(${backgroundImage}) center/cover no-repeat`
          : "linear-gradient(to bottom right, #FF6F61, #4B0082)",
        color: "#FFFFFF",
        padding: "16px",
        margin: "8px",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          width: "fit-content",
          backgroundImage: "linear-gradient(90deg,#FF024B, #FF028F)",
          borderRadius: "16px",
          padding: "4px 12px",
        }}
      >
        <Typography variant="caption" sx={{ color: "#fff" }}>
          {badgeText}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <img
          src={arrow}
          alt="arrow"
          style={{ height: "24px", width: "24px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "5px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "18.15px",
            textAlign: "left",
            color: "#FFFFFF",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardComponent;
