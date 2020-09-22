import React from "react";

interface CardProps {
  image: string;
  value: string;
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
        src={props.image}
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
      {props.value && (
        <span
          style={{
            position: "absolute",
            // backgroundClip: "border-box",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            top: props.top + props.height / 2 - valueWidth / 2,
            left: props.left + props.width / 2 - valueWidth / 2,
            width: valueWidth,
            height: valueWidth,
            // padding: "5px",
          }}
        >
          {" "}
          {props.value}
        </span>
      )}
    </div>
  );
}

export default Card;
