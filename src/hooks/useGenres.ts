import { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client';

export interface GenresResults {  
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

export interface Genres {
    count: number;
    results: GenresResults[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<GenresResults[]>([]);
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
        setGenres(res.data.results);
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
  
  return {genres, loading, error};
}

export default useGenres;