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
import { ThemeProvider } from "next-themes";
import { Switch } from "@chakra-ui/react";
import ColorSwitch from "./components/colorSwitch";

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
      <GridItem colSpan={3} rowSpan={1} h={"100%"}>
        Main
      </GridItem>

      <GridItem colSpan={3} rowSpan={1} h={"100%"}>
        Aside
      </GridItem>
    </Grid>
  );
}

export default App;
