import React from 'react';
import HeaderSearchForm from './HeaderSearchForm';
import HeaderSearchResult from './HeaderSearchResult';

const HeaderSearch = (props) => {
    return (
        <div className="header_search">
            <HeaderSearchForm></HeaderSearchForm>
            <div className="search_results">
                <HeaderSearchResult label="Result label 1"></HeaderSearchResult>
                <HeaderSearchResult label="Result label 2"></HeaderSearchResult>
                <HeaderSearchResult label="Result label 3"></HeaderSearchResult>
                <HeaderSearchResult label="Result label 4"></HeaderSearchResult>
            </div>
        </div>
    );
};

export default HeaderSearch;
