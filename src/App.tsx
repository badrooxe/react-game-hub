import { Box, Grid, GridItem, Show, SimpleGrid } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

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
          <GridItem
            area="side"
            bg="red.200"
            w="250px"
            borderTop={"2px solid black"}
          >
            side
          </GridItem>
        </Show>
        <GridItem
          area="main"
          borderTop={"2px solid black"}
          borderLeft={"2px solid black"}
        >
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
