import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Board from "./board";

var brick = require("./images/brick.png");
var desert = require("./images/desert.png");
var wheat = require("./images/wheat.png");
var ore = require("./images/ore.png");
var sheep = require("./images/sheep.png");
var wood = require("./images/wood.png");
var cardMap: Record<string, string> = {
  brick: brick,
  desert: desert,
  wheat: wheat,
  ore: ore,
  sheep: sheep,
  wood: wood,
  "": "",
};

function shuffle(arr: Object[]) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function shuffleCards() {
  let cs: string[] = [
    "ore",
    "ore",
    "ore",
    "brick",
    "brick",
    "brick",
    "wheat",
    "wheat",
    "wheat",
    "wheat",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wood",
    "wood",
    "wood",
    "wood",
  ];
  shuffle(cs);
  cs = [...cs.slice(0, 9), "desert", ...cs.slice(9)].map((v) => cardMap[v]);
  console.log("generated cards", cs);
  return cs;
}

function shuffleValues() {
  let vs: number[] = [
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
  ];
  shuffle(vs);
  vs = [...vs.slice(0, 9), 0, ...vs.slice(9)];
  console.log("generated cards", vs);
  return vs;
}

function App() {
  const [cards, setCards] = useState<string[]>(shuffleCards());
  const [values, setValues] = useState<number[]>(shuffleValues());

  let generateBoard = () => {
    setCards(shuffleCards());
    setValues(shuffleValues());
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div
          className="App-header"
          style={{ display: "block", padding: "20px", width: "100%" }}
        >
          Welcome to Catan
        </div>
        <div
          style={{
            alignContent: "center",
          }}
        >
          <button
            onClick={generateBoard}
            style={{
              // height: 100,
              font: "Serif 24px bold italic",
              padding: 10,
              margin: 10,
              color: "white",
              backgroundColor: "#4a74c5",
              borderRadius: "10px",
            }}
          >
            Click here to Shuffle Board
          </button>
        </div>
        <div
          style={{
            position: "relative",
            border: "2px solid",
            backgroundColor: "rgba(0,0,255,0.2)",
            width: 700,
            height: 640,
          }}
        >
          {cards && values && (
            <Board
              cards={cards}
              values={values}
              left={0}
              top={0}
              cardSize={155}
            />
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
