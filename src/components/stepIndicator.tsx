import { Box, Typography } from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

interface StepIndicatorProps {
  done: boolean;
  child?: string;
  index: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  done,
  child,
  index,
}) => {
  return (
    <Box
      sx={{
        width: child ? "108px" : "62px",
        height: child ? "60px" : "62px",
        borderRadius: child ? "26px" : "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: done ? "#2A2A2A" : "#FFFFFF73",
        border: "none",
      }}
    >
      {done ? (
        <DoneRoundedIcon
          sx={{
            color: "#FF016A",
          }}
        />
      ) : child ? (
        <Typography color="#FFFFFF" fontWeight={500} fontSize={"20px"}>
          {child}
        </Typography>
      ) : (
        <Typography color="#FFFFFF" fontSize={"20px"}>
          {index + 1}
        </Typography>
      )}
    </Box>
  );
};

export default StepIndicator;
