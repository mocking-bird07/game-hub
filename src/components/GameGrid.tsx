import React, { useState } from "react";
import service from "@/services/service";
import games from "@/services/game";

const GameGrid = () => {
  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
