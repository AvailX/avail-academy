import { Paper, Button, Box } from "@mui/material";
import bgImage from "../assets/gradient.jpg";

interface ItemProps {
  item: {
    name: string;
    description: string;
  };
}

function Item({ item }: ItemProps) {
  return (
    <Box
      sx={{
        height: 200, // Adjust height to match the design
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover", // Ensure the image covers the entire Paper area
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-end", // Position content to the right side
        alignItems: "center",
        padding: "20px",
        boxShadow: "none",
        borderRadius: "20px", // Rounded corners to match the image
        position: "relative", // For positioning the button absolutely
        overflow: "hidden",
      }}
    >
      {/* <h2>{item.name}</h2>
      <p>{item.description}</p> */}
      <Button
        variant="contained"
        sx={{
          backgroundImage: "linear-gradient(90deg,#FF024B, #FF028F)",
          color: "white",
          borderRadius: "20px",
          padding: "8px 80px",
          position: "absolute",
          bottom: "20px",
          right: "60px",
          textTransform: "none",
          fontSize: "18px",

          //   fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#FF5F7E",
          },
        }}
      >
        Join Now
      </Button>{" "}
    </Box>
  );
}
export default Item;
