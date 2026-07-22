import React from "react";

function ListofIndianPlayers(props) {
  return (
    <div>
      {props.IndianPlayers.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </div>
  );
}

export default ListofIndianPlayers;
