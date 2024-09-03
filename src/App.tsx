import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar.tsx";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem p={"0.5em"} area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above={"lg"}>
        <GridItem area={"aside"} bg={"gold"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
