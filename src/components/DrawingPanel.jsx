import React from "react";
import Row from "./Row";

export default function DrawingPanel(props) {
  const { width, height, color } = props;
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} color={color} />);
  }

  return (
    <>
      <div>{rows}</div>
    </>
  );
}
