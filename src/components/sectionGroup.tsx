// SectionGroup.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import SectionCard from "./sectionCard";

interface SectionData {
  sectionName: string;
  sectionDescription: string;
  sectionImage?: string;
  sectionProgress: number;
}

interface SectionGroupProps {
  headerName: string;
  sections: SectionData[];
}

const SectionGroup: React.FC<SectionGroupProps> = ({
  headerName,
  sections,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px",
        mb: 4,
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "30px",
          color: "#FFFFFF",
          mb: 2,
          textAlign: "left",
        }}
      >
        {headerName}
      </Typography>
      {sections.map((section, index) => (
        <SectionCard
          key={index}
          sectionName={section.sectionName}
          sectionDescription={section.sectionDescription}
          sectionImage={section.sectionImage}
          sectionProgress={section.sectionProgress}
        />
      ))}
    </Box>
  );
};

export default SectionGroup;
