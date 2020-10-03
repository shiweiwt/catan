import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Button, Jumbotron, Container, Row, Col } from "react-bootstrap";
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
  const containerRef = useRef<HTMLDivElement>(null);

  const { width: windowWidth } = useWindowDimensions();
  const width = containerRef.current
    ? containerRef.current.clientWidth
    : windowWidth;
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
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container ref={containerRef} className="p-3">
        <Jumbotron style={{ textAlign: "center" }}>
          <h1>Welcome to Catan</h1>
        </Jumbotron>
        <Row>
          <Col>
            <Button onClick={generateBoard}>Shuffle Board</Button>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{ marginTop: "2px" }}>
          <Col sm="3">
            <Button onClick={shareBoardUrl}>Copy Board URL to Clipboard</Button>
          </Col>
          <Col sm="8">
            <form>
              <textarea
                ref={textAreaRef}
                style={{
                  font: "ariel",
                  border: "none",
                  width: (width * 8) / 12,
                  alignContent: "center",
                }}
                value={boardUrl}
              />
            </form>
          </Col>
        </Row>
        <Row
          style={{
            position: "relative",
            alignContent: "center",
            border: "5px solid lightblue",
            marginTop: "2px",
            backgroundColor: "rgba(0,0,255,0.2)",
            width: cardSize * 9,
            height: cardSize * 9,
          }}
        >
          <Col>
            {cards && values && (
              <Board
                cards={cards}
                values={values}
                left={0}
                top={-cardSize * 4}
                cardSize={cardSize}
              />
            )}
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
