import useGames from "../hooks/useGames";

const { games, loading, error } = useGames();

const GameGrid = () => {
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
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
