import React from 'react';
import SearchBar from '../../home/Searchbar';
import Articles from '../articles';

const searchedNewsArticles = () => {
    return (
        <>
            <SearchBar />
            <Articles />
        </>
    );
}

export default searchedNewsArticles;