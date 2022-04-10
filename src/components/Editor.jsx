import React, { useState } from "react";
import "../index.css";
import { GithubPicker } from "react-color";
import DrawingPanel from "./DrawingPanel";

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

  function changeColor(color) {
    setSelectedColor(color.hex);
  }

  return (
    <div className="flex justify-center min-h-screen p-5 items center">
      <div className="p-4 text-2xl border-4 art-container">
        {hidePanel && (
          <>
            <h1 className="mb-10 text-6xl text-center">PIXEL ART !</h1>
            <h2 className="mb-20 text-3xl text-center">
              Qual o tamanho da sua arte?{" "}
            </h2>
          </>
        )}
        {hidePanel && (
          <div className="flex justify-around">
            <label htmlFor="width">
              Eixo X
              <br />
              <input
                className="w-20 h-20 text-4xl text-center text-black"
                id="width"
                type="number"
                defaultValue={panelWidth}
                onChange={(e) => setPanelWidth(e.target.value)}
              />
            </label>
            <label htmlFor="height">
              Eixo Y
              <br />
              <input
                className="w-20 h-20 text-4xl text-center text-black"
                id="height"
                type="number"
                defaultValue={panelHeight}
                onChange={(e) => setPanelHeight(e.target.value)}
              />
            </label>
          </div>
        )}

        {hideOptions && (
          <div className="items-center justify-center mb-5 ">
            <h1>Qual a cor de hoje?</h1>
            <GithubPicker
              width=""
              color={selectedColor}
              onChangeComplete={changeColor}
            />
          </div>
        )}

        {hideOptions && (
          <DrawingPanel
            width={panelWidth}
            height={panelHeight}
            color={selectedColor}
          />
        )}

        <div className="inline-block mt-10 ml-20">
          <button type="button" className="" onClick={startDrawing}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
