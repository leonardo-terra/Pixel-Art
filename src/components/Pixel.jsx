import React, { useState } from "react";

export default function Pixel(props) {
  const { color } = props;

  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [changeColor, setChangeColor] = useState(true);

  function applyColor() {
    setPixelColor(color);
    setChangeColor(false);
  }

  function changeColorOnHover() {
    setOldColor(pixelColor);
    setPixelColor(color);
  }

  function resetColor() {
    if (changeColor) {
      setPixelColor(oldColor);
    }
    setChangeColor(true);
  }

  return (
    <div
      className="h-6 w-6 border"
      style={{ backgroundColor: pixelColor }}
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
    ></div>
  );
}
