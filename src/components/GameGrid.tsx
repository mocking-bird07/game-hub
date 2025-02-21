import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./gameCards";
import "../index.css";
import { useColorMode } from "@/components/ui/color-mode";

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
  const { colorMode } = useColorMode();

  if (games != null) {
    return (
      <SimpleGrid
        className={colorMode === "dark" ? "grid" : "grid2"}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={3}
        w={"100%"}
      >
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    );
  }
};

export default GameGrid;
