import React, { createContext, useContext, useState } from 'react';
import { ISearchContext } from '../interfaces';

interface Props {
    children: React.ReactNode;
}

export const SearchContext = createContext<ISearchContext | undefined>(undefined);

export const SearchProvider = ({ children }: Props) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, isFilterApplied, setIsFilterApplied }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = (): ISearchContext => {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    };

    return context;
};