import { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client';

export interface Results {  
    id: number;
    name: string;
    slug: string;
    games_count: number;
}

export interface Genres {
    count: number;
    results: Results[];
}
const useGenres = () => {
  const [genre, setGenre] = useState<Results[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    //axios
    apiClient
      .get<Genres>("/genres", {
        signal: controller.signal,
      })
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  },[]);
  
  return {genre, loading, error};
}

export default useGenres;