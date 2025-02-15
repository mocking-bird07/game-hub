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

function App() {
  return (
    <Grid column={{ sm: 1, md: 1, lg: 2, xl: 2 }}>
      <GridItem paddingX={5} colSpan={6} rowSpan={1} h={"100%"} mb={2}>
        <NavBar />
      </GridItem>

      <GridItem
        display={{ base: "none", lg: "block" }}
        colSpan={3}
        rowSpan={1}
        h={"100%"}
      >
        <GameGenre />
      </GridItem>

      <GridItem colSpan={3} rowSpan={1} h={"100%"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
