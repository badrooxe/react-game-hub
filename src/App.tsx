import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { GenresResults } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [SelectedGenre, setSelectedGenre] = useState<GenresResults | null>(
    null
  );
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
            <SideBar
              selectedGenre={SelectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem
          area="main"
          borderTop={"2px solid black"}
          borderLeft={{ lg: "2px solid black" }}
        >
          {/* 
            //TODO: passe selected plateform via props
          */}

          <PlatformSelector selectedPlateform={null} />
          <GameGrid selectedGenre={SelectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
