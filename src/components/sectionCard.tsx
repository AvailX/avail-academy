// This code contains the section card alone.
// Which will then be mapped to the screen 
// To return the sectionCard with an header, use sectionGroup instead 🤝

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

interface SectionCardProps {
  sectionName: string;
  sectionDescription: string;
  sectionImage?: string;
  sectionProgress: number;
}

// Styled component for border linear progress
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#E62290",
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#15F3FF",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

const SectionCard: React.FC<SectionCardProps> = ({
  sectionName,
  sectionDescription,
  sectionImage,
  sectionProgress,
}) => {
  return (
    <Box
      sx={{
        width: "700px",
        height: "75px",
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        p: 2,
        mt: "10px",
        mb: "10px",
      }}
    >
      <Box
        sx={{
          width: "84px",
          height: "84px",
          borderRadius: "17px",
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          mr: 2,
        }}
      >
        {sectionImage ? (
          <img
            src={sectionImage}
            alt="Section"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Typography></Typography>
        )}
      </Box>
      <Box
        sx={{
          flex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mr: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "20px",
            color: "#000000",
            mb: 0.5,
          }}
        >
          {sectionName}
        </Typography>
        <Typography
          sx={{
            fontWeight: 300,
            fontSize: "13px",
            color: "#000000",
          }}
        >
          {sectionDescription}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 2,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <BorderLinearProgress
          variant="determinate"
          value={sectionProgress}
          sx={{
            width: "100%",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#15F3FF",
              width: `${sectionProgress}%`,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SectionCard;
