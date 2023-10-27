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
