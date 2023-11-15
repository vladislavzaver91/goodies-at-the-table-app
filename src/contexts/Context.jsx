import React, { createContext, useContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterApplied, setIsFilterApplied] = useState(false);

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, isFilterApplied, setIsFilterApplied }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    return context;
};