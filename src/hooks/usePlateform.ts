import useData from "./useData";

export interface Plateform{
    id: number;
    name: string;
    slug: string;
    image: string;
    image_background: string;
}

export interface ParentPlateformResult{
    id: number;
    name: string;
    slug: string;
    platforms: Plateform[];
}

export interface ParentPlateform{
    count: number;
    results: ParentPlateformResult[];
}

const usePlateform = (selectedPlateform:ParentPlateformResult | null) => useData<ParentPlateformResult>('/platforms/lists/parents',{ params:{plateform:selectedPlateform?.id}},[selectedPlateform?.id]);

export default usePlateform;