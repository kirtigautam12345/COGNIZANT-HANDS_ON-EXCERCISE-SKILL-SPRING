import React from "react";

import ListofPlayers from "./ListofPlayers";
import Scorebelow70 from "./Scorebelow70";
import IndianPlayers from "./IndianPlayers";

function App() {
  const players = [
    { name: "Sachin", score: 95 },
    { name: "Virat", score: 82 },
    { name: "Rohit", score: 67 },
    { name: "Dhoni", score: 55 },
    { name: "Gill", score: 77 },
    { name: "Hardik", score: 69 },
    { name: "Pant", score: 60 },
    { name: "Jadeja", score: 88 },
    { name: "Bumrah", score: 45 },
    { name: "Shami", score: 72 },
    { name: "Siraj", score: 65 },
  ];

  var flag = false;

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>

        <ListofPlayers players={players} />

        <hr />

        <h1>Players having Scores Less than 70</h1>

        <Scorebelow70 players={players} />
      </div>
    );
  }

  return (
    <div>
      <IndianPlayers />
    </div>
  );
}

export default App;
