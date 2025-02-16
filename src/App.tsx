import {
  Button,
  ButtonGroup,
  Stack,
  Text,
  Grid,
  GridItem,
  Show,
  Theme,
  HStack,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameGenre from "./components/GameGenre";
import games from "./services/games";
import { useState } from "react";
import { Game } from "./components/GameGrid";

function App() {
  let [selectedGenre, setgenre] = useState<string>();
  let gameDisplay = selectedGenre
    ? games.filter((game) => game.genre === selectedGenre)
    : games;

  console.log(selectedGenre);
  return (
    <Grid column={{ sm: 1, md: 1, lg: 2, xl: 2 }}>
      <GridItem paddingX={5} colSpan={6} rowSpan={1} h={"100%"} mb={2}>
        <NavBar click={() => setgenre(undefined)} />
      </GridItem>

      <GridItem
        display={{ base: "none", lg: "block" }}
        colSpan={3}
        rowSpan={1}
        h={"100%"}
      >
        <GameGenre click={(genre: string) => setgenre(genre)} />
      </GridItem>

      <GridItem colSpan={3} rowSpan={1} h={"100%"}>
        <GameGrid games={gameDisplay} />
      </GridItem>
    </Grid>
  );
}

export default App;
