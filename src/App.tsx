import {
  Button,
  ButtonGroup,
  Stack,
  Text,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";

function App() {
  return (
    <Grid templateRows="2" templateColumns="4" gap={"0"}>
      <GridItem colSpan={6} rowSpan={1} bg="blue" h={"40px"}>
        Nav
      </GridItem>
      <GridItem colSpan={3} rowSpan={1} bg="red" h={"100px"}>
        Main
      </GridItem>
      <Show when={"lg"}>
        <GridItem colSpan={3} rowSpan={1} bg="yellow" h={"100px"}>
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
