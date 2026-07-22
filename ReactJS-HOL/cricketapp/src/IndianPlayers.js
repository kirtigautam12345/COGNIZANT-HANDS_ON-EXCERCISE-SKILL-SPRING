import React from "react";
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import ListofIndianPlayers from "./ListofIndianPlayers";

function IndianPlayers() {
  const IndianTeam = ["Rohit", "Gill", "Virat", "Shreyas", "Rahul", "Hardik"];

  const [first, second, third, fourth, fifth, sixth] = IndianTeam;

  const T20Players = ["First Player", "Second Player", "Third Player"];

  const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];

  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Team</h2>

      <h3>Odd Players</h3>

      <OddPlayers first={first} third={third} fifth={fifth} />

      <hr />

      <h3>Even Players</h3>

      <EvenPlayers second={second} fourth={fourth} sixth={sixth} />

      <hr />

      <h3>List of Indian Players Merged</h3>

      <ListofIndianPlayers IndianPlayers={IndianPlayers} />
    </div>
  );
}

export default IndianPlayers;
