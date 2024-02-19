export interface ISearchContext {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    isFilterApplied: boolean;
    setIsFilterApplied: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IFetchData {
    isLoading: boolean;
    data: IDishes[];
    nextPage: string | null;
    isLastPage: boolean;
    noResults: boolean;
    error: Error | null;
    setData: React.Dispatch<React.SetStateAction<IDishes[]>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setIsLastPage: React.Dispatch<React.SetStateAction<boolean>>;
    setNextPage: React.Dispatch<React.SetStateAction<string | null>>;
    fetchDataWithFilter: (selectedDishType: string, searchQuery: string) => Promise<void>;
    fetchDataWithoutFilter: (searchQuery?: string) => Promise<void>;
    fetchDataBySearch: (searchQuery: string) => Promise<void>;
}

export interface IDishes {
    image: string;
    mealType: string[];
    label: string;
    uri?: string | null;
    ingredients: IDishIngredients[];
    cuisineType: string[];
    dishType: string[];
}

export interface IDishInfo {
    recipe: IDishes;
}

export interface IDishIngredients {
    food: string;
    foodId: string;
    image?: string;
}

export interface IDishesApiResponse {
    hits: {recipe: IDishes}[];
    _links: {
        next: {
            href: string;
    }};
}

export interface IDataApi {
    data: IDishesApiResponse;
}

export interface IFilters {
    health: string;
    type: string;
    imageSize: string;
}