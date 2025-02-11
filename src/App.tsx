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

function App() {
  return (
    <Grid templateRows="2" templateColumns="4" gap={"0"}>
      <GridItem paddingLeft={"10px"} colSpan={6} rowSpan={1} h={"100%"}>
        <NavBar />
      </GridItem>
      <GridItem colSpan={3} rowSpan={1} bg="red" h={"100%"}>
        Main
      </GridItem>
      <Show when={"lg"}>
        <GridItem colSpan={3} rowSpan={1} bg="yellow" h={"100%"}>
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
