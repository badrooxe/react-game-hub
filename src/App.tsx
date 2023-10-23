import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "side main"`,
        }}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={{ lg: "250px 1fr", base: "1fr" }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="side" w="250px" borderTop={"2px solid black"}>
            <SideBar />
          </GridItem>
        </Show>
        <GridItem
          area="main"
          borderTop={"2px solid black"}
          borderLeft={{ lg: "2px solid black" }}
        >
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
