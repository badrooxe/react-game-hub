import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
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
      <SimpleGrid columns={3} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </ul>
  );
};

export default GameGrid;
