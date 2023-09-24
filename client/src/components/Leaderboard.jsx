import React, { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import "./Leaderboard.css";

function Leaderboard() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      game: "Fortnite",
      player: "John",
      booster: true,
      profit: "$1000",
      uid: 123
    },
    {
      id: 2,
      game: "Minecraft",
      player: "Emily",
      booster: false,
      profit: "$500",
      uid: 456
    },
    {
      id: 3,
      game: "Valorant",
      player: "Tom",
      booster: true,
      profit: "$800",
      uid: 789
    },
    {
      id: 4,
      game: "Overwatch",
      player: "Lucy",
      booster: true,
      profit: "$1200",
      uid: 101112
    },
    {
      id: 5,
      game: "Call of Duty",
      player: "Max",
      booster: false,
      profit: "$600",
      uid: 131415
    },
    {
        id: 6,
        game: "Fortnite",
        player: "John",
        booster: true,
        profit: "$1000",
        uid: 123
      },
      {
        id: 7,
        game: "Minecraft",
        player: "Emily",
        booster: false,
        profit: "$500",
        uid: 456
      },
      {
        id: 8,
        game: "Valorant",
        player: "Tom",
        booster: true,
        profit: "$800",
        uid: 789
      },
      {
        id: 9,
        game: "Overwatch",
        player: "Lucy",
        booster: true,
        profit: "$1200",
        uid: 101112
      },
      {
        id: 10,
        game: "Call of Duty",
        player: "Max",
        booster: false,
        profit: "$600",
        uid: 131415
      },
  ]);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Game name</th>
            <th>Player name</th>
            <th>Booster</th>
            <th>Profit</th>

          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.game}</td>
              <td>{player.player}</td>
              <td>
                {player.booster ? (
                  <FaSortUp className="booster-icon" />
                ) : (
                  <FaSortDown className="no-booster-icon" />
                )}
              </td>
              <td>{player.profit}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;