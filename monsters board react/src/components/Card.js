import React from "react";
import "./card.css";
import CardMain from "./CardMain";

function Card(props) {
  return (
    <div>
      <div className="card-list">
        {props.monsters.map((item) => (
          <CardMain key={item.id} monster={item} />
        ))}
      </div>
    </div>
  );
}

export default Card;
