import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GenresResults } from "../hooks/useGenres";

interface GameGridProps {
  selectedGenre: GenresResults | null;
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 });
  const spacing = useBreakpointValue({ base: 5, md: 10, lg: 15, xl: 15 });

  const { data, loading, error } = useGames(selectedGenre);
  const skeletons = Array(20).fill(0);
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
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </ul>
  );
};

export default GameGrid;
