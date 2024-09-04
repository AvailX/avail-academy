import React from "react";
import { Box, Typography } from "@mui/material";
import StepIndicator from "../components/stepIndicator";
import onFireIcon from "../assets/on-fire.svg";
import lightFireIcon from "../assets/light-fire.svg";

const AlertWindow: React.FC = () => {
  const steps = [
    { done: true, child: "" },
    { done: true, child: "" },
    { done: false, child: "" },
    { done: false, child: "" },
    { done: false, child: "+100 XP" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          width: "25%",
          height: "47%",
          background: "linear-gradient(180deg, #FF0094, #FF005C)",
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          p: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundImage: `url(${lightFireIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex: 0,
          }}
        >
          <img
            src={onFireIcon}
            alt="On Fire"
            width={"60px"}
            height={"100px"}
            style={{ position: "relative", zIndex: 1 }}
          />
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: "30px",
              color: "#000000",
              position: "relative",
              zIndex: 1,
            }}
          >
            You’re On Fire!
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: "20px",
              color: "#000000",
              position: "relative",
              zIndex: 1,
            }}
          >
            ‘’Rome wasn’t built in a day’’
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((step, index) => (
              <StepIndicator
                key={index}
                done={step.done}
                child={step.child}
                index={index}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AlertWindow;
