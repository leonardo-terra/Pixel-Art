import React, { useRef } from "react";
import Row from "./Row";
import { exportComponentAsPNG } from "react-component-export-image";

export default function DrawingPanel(props) {
  const { width, height, color } = props;
  const panelRef = useRef();
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} color={color} />);
  }

  return (
    <>
      <div className="flex flex-col items-center" ref={panelRef}>
        {rows}
      </div>
      <button type="button" onClick={() => exportComponentAsPNG(panelRef)}>
        Salve sua arte!
      </button>
    </>
  );
}
