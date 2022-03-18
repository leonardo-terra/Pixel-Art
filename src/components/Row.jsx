import React from "react";
import Pixel from "./Pixel";

export default function Row(props) {
  const { width, color } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel color={color} />);
  }

  return <div className="flex justify-center items-center">{pixels}</div>;
}
