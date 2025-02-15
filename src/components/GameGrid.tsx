import React, { useEffect, useState } from "react";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Card, Image, Button, Flex } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";

import games from "@/services/games";
import GameCard from "./gameCards";

const GameGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={"10px"}
      gap={3}
      w={"100%"}
      ml={{ md: "25px" }}
    >
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
