import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Board from "./board";
import useWindowDimensions from "./windowdimension";
import querystring from "querystring";

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
    "o",
    "o",
    "o",
    "b",
    "b",
    "b",
    "w",
    "w",
    "w",
    "w",
    "s",
    "s",
    "s",
    "s",
    "t",
    "t",
    "t",
    "t",
  ];
  shuffle(cs);
  shuffle(cs);
  cs = [...cs.slice(0, 9), "d", ...cs.slice(9)];
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
  shuffle(vs);
  vs = [...vs.slice(0, 9), 0, ...vs.slice(9)];
  console.log("generated cards", vs);
  return vs;
}

interface BoardConfig {
  cards: string[];
  values: number[];
}

function parseBoard(board: string) {
  let fs = board.split(",");
  if (fs.length !== 38) {
    return null;
  }
  let values = fs.slice(19).map((value: string) => Number(value));
  let b: BoardConfig = {
    cards: fs.slice(0, 19),
    values: values,
  };
  return b;
}

function generateBoardString(board: BoardConfig) {
  let fs = [...board.cards, ...board.values.map((v) => v.toString())];
  return fs.join(",");
}

function App() {
  const [cards, setCards] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const [boardUrl, setBoardUrl] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { width } = useWindowDimensions();
  const cardSize = width / 9;

  let generateBoard = () => {
    let cards = shuffleCards();
    let values = shuffleValues();
    let location = window.location;
    let board: BoardConfig = {
      cards: cards,
      values: values,
    };
    let boardUrl =
      `${location.protocol}://${location.host}${location.pathname}?b=` +
      generateBoardString(board);
    console.log("board url:", boardUrl);
    setBoardUrl(boardUrl);
    setCards(cards);
    setValues(values);
  };

  let shareBoardUrl = (e) => {
    if (textAreaRef && textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
      // This is just personal preference.
      // I prefer to not show the whole text area selected.
      e.target.focus();
      console.log("boardURL copied");
    }
  };

  useEffect(() => {
    let location = window.location;
    console.log("location: ", location.search);
    let board: BoardConfig | null = null;
    if (location.search && location.search.length > 1) {
      let query = querystring.parse(location.search.slice(1));
      let boardParam = query.b;
      if (boardParam) {
        let data = typeof boardParam == "string" ? boardParam : boardParam[0];
        console.log("data", data);
        board = parseBoard(data);
        console.log("parsed board", board);
      }
    }

    if (!board) {
      board = { cards: shuffleCards(), values: shuffleValues() };
    }
    setCards(board.cards);
    setValues(board.values);
    let boardUrl =
      `${location.protocol}://${location.host}${location.pathname}?b=` +
      generateBoardString(board);
    console.log("board url:", boardUrl);
    setBoardUrl(boardUrl);
  }, [window.location]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div
          className="App-header"
          style={{
            display: "block",
            paddingTop: 20,
            paddingBottom: 20,
            width: "100%",
          }}
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
              marginTop: 10,
              color: "white",
              backgroundColor: "#4a74c5",
              borderRadius: "10px",
            }}
          >
            Shuffle Board
          </button>
        </div>
        <div
          style={{
            alignContent: "center",
          }}
        >
          <button
            onClick={shareBoardUrl}
            style={{
              // height: 100,
              font: "Serif 24px bold italic",
              padding: 10,
              marginTop: 10,
              color: "white",
              backgroundColor: "#4a74c5",
              borderRadius: "10px",
            }}
          >
            Copy Board URL to Clipboard
          </button>
        </div>
        <div>
          <form>
            <textarea
              ref={textAreaRef}
              style={{
                font: "ariel",
                border: "none",
                // display: "block",
                width: width / 2,
                alignContent: "center",
              }}
              value={boardUrl}
            />
          </form>
        </div>
        <div
          style={{
            position: "relative",
            alignContent: "center",
            border: "5px solid lightblue",
            margin: "20px",
            // left: "20px",
            backgroundColor: "rgba(0,0,255,0.2)",
            width: cardSize * 8.67 + 50,
            height: cardSize * 8 + 50,
          }}
        >
          {cards && values && (
            <Board
              cards={cards}
              values={values}
              left={0}
              top={0}
              cardSize={cardSize}
            />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
