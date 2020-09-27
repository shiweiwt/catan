import React from "react";
import { cardMap } from "./cardmap";

interface CardProps {
  image: string;
  value: number;
  top: number;
  left: number;
  width: number;
  height: number;
}

function Card(props: CardProps) {
  const valueWidth = props.width * 0.2;
  return (
    <div>
      <img
        src={cardMap[props.image]}
        alt={props.image}
        style={{
          position: "absolute",
          top: props.top,
          left: props.left,
          width: props.width,
          height: props.height,
          opacity: 50,
          transform: "rotateZ(30deg)",
        }}
      />
      {props.value > 0 && (
        <span
          style={{
            position: "absolute",
            border: "solid #b3b3b3 2px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            color:
              props.value === 6 || props.value === 8 ? "#ff0000" : "#000000",
            top: props.top + props.height / 2 - valueWidth / 2,
            left: props.left + props.width / 2 - valueWidth / 2,
            fontSize: valueWidth - 5,
            width: valueWidth,
            height: valueWidth,
            // lineHeight: valueWidth,
          }}
        >
          {props.value}
        </span>
      )}
    </div>
  );
}

export default Card;
