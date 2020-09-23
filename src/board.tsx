import React from "react";
import Card from "./card";

interface BoardProps {
  cards: string[];
  values: number[];
  top: number;
  left: number;
  cardSize: number;
}

interface Coord {
  top: number;
  left: number;
}

function Board(props: BoardProps) {
  var top = 0;
  var left = props.left;
  var cardSize = props.cardSize;
  var factor = 1.732 / 2;
  var a = cardSize / 2;
  var b = a * factor;
  var positions: Coord[] = [
    // first row
    {
      top: top + 0,
      left: left + 2 * b,
    },
    {
      top: top + 0,
      left: left + 4 * b,
    },
    {
      top: top + 0,
      left: left + 6 * b,
    },
    // 2nd row
    {
      top: top + 1.5 * a,
      left: left + b,
    },
    {
      top: top + 1.5 * a,
      left: left + 3 * b,
    },
    {
      top: top + 1.5 * a,
      left: left + 5 * b,
    },
    {
      top: top + 1.5 * a,
      left: left + 7 * b,
    },
    // 3rd row
    {
      top: top + 3 * a,
      left: left,
    },
    {
      top: top + 3 * a,
      left: left + 2 * b,
    },
    {
      top: top + 3 * a,
      left: left + 4 * b,
    },
    {
      top: top + 3 * a,
      left: left + 6 * b,
    },
    {
      top: top + 3 * a,
      left: left + 8 * b,
    },
    // 4th row
    {
      top: top + 4.5 * a,
      left: left + b,
    },
    {
      top: top + 4.5 * a,
      left: left + 3 * b,
    },
    {
      top: top + 4.5 * a,
      left: left + 5 * b,
    },
    {
      top: top + 4.5 * a,
      left: left + 7 * b,
    },
    // 5th row
    {
      top: top + 6 * a,
      left: left + 2 * b,
    },
    {
      top: top + 6 * a,
      left: left + 4 * b,
    },
    {
      top: top + 6 * a,
      left: left + 6 * b,
    },
  ];

  return (
    <>
      {positions.map((p, idx) => {
        return (
          <Card
            image={props.cards[idx]}
            value={props.values[idx]}
            top={p.top}
            left={p.left}
            width={cardSize}
            height={cardSize}
          />
        );
      })}
    </>
  );
}

export default Board;
