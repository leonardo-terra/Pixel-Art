import React, { useState } from "react";
import "../index.css";

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hidePanel, setHidePanel] = useState(true);
  const [buttonText, setButtonText] = useState("Gerar quadro");
  const [selectedColor, setSelectedColor] = useState("#f44336");

  function startDrawing() {
    setHideOptions(!hideOptions);
    setHidePanel(!hidePanel);

    buttonText === "Gerar quadro"
      ? setButtonText("Reiniciar")
      : setButtonText("Gerar quadro");
  }

  return (
    <>
      <div className="border-4 ">
        <h1 className="text-center">PIXEL ART !</h1>
        {hidePanel && <h2>Qual o tamanho da sua arte? </h2>}
        {hidePanel && (
          <div className="flex justify-center items-center h-full">
            <label htmlFor="width">
              Comprimento:
              <input
                id="width"
                type="number"
                defaultValue={panelWidth}
                onChange={(e) => setPanelWidth(e.target.value)}
              />
            </label>
            <label htmlFor="height">
              Altura:
              <input
                id="height"
                type="number"
                defaultValue={panelHeight}
                onChange={(e) => setPanelHeight(e.target.value)}
              />
            </label>
          </div>
        )}

        <div className="flex justify-center items-center">
          <button type="button" className="" onClick={startDrawing}>
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}
