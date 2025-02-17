import {
  Button,
  ButtonGroup,
  Stack,
  Text,
  Grid,
  GridItem,
  HStack,
  Spinner,
  Box,
  Heading,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameGenre from "./components/GameGenre";
import games from "./services/games";
import { useState } from "react";
import { createListCollection } from "@chakra-ui/react";
import ChosePlatform from "./components/ChosePlatform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  let [selectedGenre, setgenre] = useState<string>();
  let [selectedPlatform, setPlatform] = useState<string>();
  let [selectedOrder, setOrder] = useState<string>();
  let [searchText, setSearch] = useState<string>();

  let gameDisplay = selectedGenre
    ? selectedPlatform
      ? selectedPlatform === "All"
        ? games
        : games.filter(
            (game) =>
              game.genre === selectedGenre && game.platform === selectedPlatform
          )
      : games.filter((game) => game.genre === selectedGenre)
    : selectedPlatform
    ? selectedPlatform === "All"
      ? games
      : games.filter((game) => game.platform === selectedPlatform)
    : games;
  const newDisplay2 = [];
  let prev = gameDisplay;
  let names = gameDisplay.map((game) => game.title).sort();

  let date = gameDisplay.map((game) => {
    return game.release_date.split("-");
  });

  let year = [
    ...new Set(
      date
        .map((dat) => {
          return parseInt(dat[0]);
        })
        .sort((a, b) => b - a)
    ),
  ];

  let month = [
    ...new Set(
      date
        .map((dat) => {
          return parseInt(dat[1]);
        })
        .sort((a, b) => b - a)
    ),
  ];

  let day = [
    ...new Set(
      date
        .map((dat) => {
          return parseInt(dat[2]);
        })
        .sort((a, b) => b - a)
    ),
  ];

  console.log(month);

  const newDisplay = [];

  if (selectedOrder != undefined) {
    if (selectedOrder === "Name") {
      names.forEach((name) => {
        prev.forEach((game) => {
          if (game.title === name) {
            newDisplay.push(game);
          }
        });
      });
      gameDisplay = newDisplay;
    } else if (selectedOrder === "Release date") {
      year.forEach((ye) => {
        month.forEach((mo) => {
          day.forEach((da) => {
            gameDisplay.forEach((game) => {
              if (
                parseInt(game.release_date.split("-")[0]) === ye &&
                parseInt(game.release_date.split("-")[1]) === mo &&
                parseInt(game.release_date.split("-")[2]) === da
              ) {
                newDisplay2.push(game);
              }
            });
          });
        });
      });
      gameDisplay = newDisplay2;
    } else {
      gameDisplay = games;
    }
  }

  let newDisplay3 = [];
  let noSearch = false;

  if (searchText != undefined) {
    gameDisplay.forEach((game) => {
      let v = game.title.toLowerCase();
      if (v.includes(searchText.toLowerCase()) === true) {
        newDisplay3.push(game);
      }
    });
    if (newDisplay3.length === 0) {
      noSearch = true;
    }
  }

  return (
    <Grid column={{ base: 1, lg: 3 }} w={"100%"} marginX={0}>
      <GridItem
        paddingX={{ sm: 2, md: 5, lg: 5, xl: 5 }}
        colSpan={6}
        rowSpan={1}
        h={"100%"}
        mb={2}
      >
        <NavBar
          onSearch={(value) => setSearch(value)}
          click={() => {
            setgenre(undefined);
            setSearch(undefined);
          }}
        />
      </GridItem>

      <GridItem
        display={{ base: "none", lg: "block" }}
        colSpan={1}
        rowSpan={6}
        h={"100%"}
      >
        <GameGenre
          weight={(genre) => (selectedGenre === genre ? "bold" : "normal")}
          click={(genre: string) => {
            setgenre(genre);
          }}
        />
      </GridItem>

      <GridItem
        colSpan={3}
        rowSpan={1}
        h={"100%"}
        padding={"10px"}
        ml={{ md: "25px" }}
      >
        <GameHeading
          genre={selectedGenre !== undefined ? selectedGenre : ""}
          platform={selectedPlatform !== undefined ? selectedPlatform : ""}
        />
        <HStack gap={5} position="relative" mb={5}>
          <ChosePlatform
            selectedPlatform={
              selectedPlatform
                ? selectedPlatform === "PC (Windows)"
                  ? "PC Windows games"
                  : selectedPlatform === "Web Browser"
                  ? "Browser games"
                  : selectedPlatform === "PC (Windows), Web Browser"
                  ? "Both PC and Browser"
                  : "All games"
                : "Platform"
            }
            onchange={(value) => setPlatform(value)}
          />
          <SortSelector
            selectedOrder={selectedOrder ? selectedOrder : "Relevance"}
            onchange={(value) => setOrder(value)}
            width={
              selectedPlatform === undefined
                ? "105px"
                : selectedPlatform === "All"
                ? "112px"
                : selectedPlatform === "PC (Windows), Web Browser"
                ? "183px"
                : selectedPlatform === "Web Browser"
                ? "147px"
                : "175px"
            }
          />
        </HStack>

        {noSearch ? (
          <Text
            ml={"100px"}
            fontWeight={"bold"}
            alignContent={"center"}
            fontSize={"40px"}
          >
            No results found for '{searchText}'
          </Text>
        ) : (
          <GameGrid games={gameDisplay} />
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
