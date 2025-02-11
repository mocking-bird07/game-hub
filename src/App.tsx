import {
  Button,
  ButtonGroup,
  Stack,
  Text,
  Grid,
  GridItem,
  Show,
  Theme,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'`,
      }}
    >
      <GridItem paddingLeft={"10px"} colSpan={6} rowSpan={1} h={"100%"}>
        <NavBar />
      </GridItem>
      <GridItem colSpan={3} rowSpan={1} bg="red" h={"100%"}>
        Main
      </GridItem>

      <GridItem colSpan={3} rowSpan={1} bg="yellow" h={"100%"}>
        Aside
      </GridItem>
    </Grid>
  );
}

export default App;
