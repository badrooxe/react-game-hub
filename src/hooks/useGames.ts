import { GenresResults } from "./useGenres";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface GamesResults {
    id: number;
    name: string;
    background_image: string;
    platforms: {platform :Platform}[];
    rating: number;
  }
  
export interface Games {
    count: number;
    results: GamesResults[];
  }

const useGames = (selectedGames: GenresResults | null) => useData<GamesResults>('/games',{ params:{genres:selectedGames?.id}},[selectedGames?.id])


export default useGames;