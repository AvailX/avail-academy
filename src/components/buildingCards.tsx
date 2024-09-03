// CardComponent.js
import React from "react";
import { Card, CardContent, Typography, Box, Badge } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
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
    <Card
      sx={{
        width: 250,
        borderRadius: "16px",
        // background: "linear-gradient(to bottom right, #FF6F61, #4B0082)",
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
          marginTop: "16px",
        }}
      >
        <img
          src={arrow}
          alt="arrow"
          style={{ height: "24px", width: "24px" }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
