import CardComponent from "components/buildingCards";
import { Box } from "@mui/material";
import React from "react";
import Example from "./components/carouselItems";

interface CardData {
  title: string;
  description: string;
  badgeText: string;
  backgroundImage: string; // Replace with your actual image URL. Replace 'url' with the actual image source.
}

const App = () => {
  const cardData: CardData[] = [
    {
      title: "Meme Coin",
      description:
        "Learn how to launch your own Meme coin on the Aleo Blockchain.",
      badgeText: "Meme Coin",
      backgroundImage: "url('https://example.com/image.jpg')",
    },
    {
      title: "NFT's",
      description: "Learn how to launch your own NFT's on the Aleo Blockchain.",
      badgeText: "NFT's",
      backgroundImage: "url('https://example.com/image.jpg')",
    },
    {
      title: "Learn Leo",
      description:
        "Learn how to launch your own Meme coin on the Aleo Blockchain.",
      badgeText: "Learn Leo",
      backgroundImage: "url('https://example.com/image.jpg')",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            description={card.description}
            badgeText={card.badgeText}
            backgroundImage={card.backgroundImage} // Replace with your actual image URL. Replace 'url' with the actual image source.
          />
        ))}
      </Box>
      <Example />
    </Box>
  );
};

export default App;
