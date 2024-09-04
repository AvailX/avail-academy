import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./items";

function Example() {
  var items = [
    {
      name: "Random Name #1",
      description: "Slider !",
    },
    {
      name: "Random Name #2",
      description: "Slider 2",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
export default Example;
