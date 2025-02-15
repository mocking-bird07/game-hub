import games from "@/services/games";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const GameGenre = () => {
  let gameGenre = [];
  let ug = [1];
  gameGenre = games.map((game) => game.genre);
  gameGenre.forEach((g) => {
    if (ug.includes(g) === false) {
      ug.push(g);
    }
  });
  ug?.splice(0, 1);
  return (
    <div>
      {ug.map((u) => (
        <Text key={u}>{u}</Text>
      ))}
    </div>
  );
};

export default GameGenre;
