import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "side main"`,
        }}
      >
        <GridItem area="nav" bg="yellow.300">
          nav
        </GridItem>
        <Show above="lg">
          <GridItem area="side" bg="red.200">
            side
          </GridItem>
        </Show>
        <GridItem area="main" bg="green.300">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
