import React from "react";

function Scorebelow70(props) {
  let players70 = [];

  props.players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
  });

  return (
    <div>
      {players70.map((item, index) => (
        <li key={index}>
          {item.name} - {item.score}
        </li>
      ))}
    </div>
  );
}

export default Scorebelow70;
