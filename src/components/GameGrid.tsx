import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

interface Results {
  id: number;
  name: string;
  // slug: string;
  // released: string;
  // background_image: string;
  // rating: number;
  // rating_top: number;
}

interface Games {
  count: number;
  results: Results[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Results[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    const controller = new AbortController();
    setLoading(true);
    //axios
    apiClient
      .get<Games>("/games", {
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

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
