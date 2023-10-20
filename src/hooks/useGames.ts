import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Results {
    id: number;
    name: string;
    background_image: string;
  }
  
export interface Games {
    count: number;
    results: Results[];
  }

const useGames = () => {
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

  return { games, loading, error };

};


export default useGames;