import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 });
  const spacing = useBreakpointValue({ base: 5, md: 10, lg: 15, xl: 15 });

  const { games, loading, error } = useGames();
  return (
    <ul
      className="list-group d-flex justify-content-center"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {error && (
        <p className="d-flex justify-content-center" style={{ color: "red" }}>
          {error}
        </p>
      )}
      {loading && <div className="spinner-border"></div>}
      <SimpleGrid columns={columns} spacing={spacing} padding={5}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </ul>
  );
};

export default GameGrid;
