import React, { useEffect, useState } from "react";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Card, Image, Button, Flex } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";
import GameCard from "./gameCards";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  critic_score: number;
  freetogame_profile_url: string;
}

interface Props {
  games: Game[];
}

const GameGrid = ({ games }: Props) => {
  if (games != null) {
    return (
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={3} w={"100%"}>
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    );
  }
};

export default GameGrid;
