import React from "react";
import { Button, Box } from "@mui/material";

function WalletConnectButton() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundImage: "linear-gradient(90deg,#FF024B, #FF028F)",
          color: "white",
          borderRadius: "4px",
          padding: "10px 20px",
          position: "absolute",
          textTransform: "none",
          fontSize: "18px",

          //   fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#FF5F7E",
          },
        }}
      >
        Connect Wallet
      </Button>{" "}
    </div>
  );
}

export default WalletConnectButton;
