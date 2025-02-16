import {
  Button,
  ButtonGroup,
  Stack,
  Text,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameGenre from "./components/GameGenre";
import games from "./services/games";
import { useState } from "react";
import { createListCollection } from "@chakra-ui/react";
import ChosePlatform from "./ChosePlatform";

function App() {
  let [selectedGenre, setgenre] = useState<string>();
  let [selectedPlatform, setPlatform] = useState<string>();
  let gameDisplay = selectedGenre
    ? selectedPlatform
      ? games.filter(
          (game) =>
            game.genre === selectedGenre && game.platform === selectedPlatform
        )
      : games.filter((game) => game.genre === selectedGenre)
    : selectedPlatform
    ? games.filter((game) => game.platform === selectedPlatform)
    : games;

  return (
    <Grid column={{ base: 1, lg: 3 }} w={{ lg: "1024" }} marginX={0}>
      <GridItem paddingX={5} colSpan={6} rowSpan={1} h={"100%"} mb={2}>
        <NavBar click={() => setgenre(undefined)} />
      </GridItem>

      <GridItem
        display={{ base: "none", lg: "block" }}
        colSpan={1}
        rowSpan={6}
        h={"100%"}
      >
        <GameGenre
          weight={(genre) => (selectedGenre === genre ? "bold" : "normal")}
          click={(genre: string) => setgenre(genre)}
        />
      </GridItem>

      <GridItem
        colSpan={5}
        rowSpan={1}
        h={"100%"}
        width={"100%"}
        padding={"10px"}
        ml={{ md: "25px" }}
      >
        <ChosePlatform
          selectedPlatform={
            selectedPlatform
              ? selectedPlatform === "PC (Windows)"
                ? "PC Windows games"
                : "Browser games"
              : "Platform"
          }
          onchange={(value) => setPlatform(value)}
        />
      </GridItem>

      <GridItem
        colSpan={3}
        rowSpan={1}
        h={"100%"}
        padding={"10px"}
        ml={{ md: "25px" }}
      >
        <GameGrid games={gameDisplay} />
      </GridItem>
    </Grid>
  );
}

export default App;
