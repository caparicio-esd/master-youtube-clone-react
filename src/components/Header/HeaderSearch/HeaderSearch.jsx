import React from 'react';
import HeaderSearchForm from './HeaderSearchForm';
import HeaderSearchResult from './HeaderSearchResult';
import styled from 'styled-components';

/**
 *
 */
const HeaderSearchStyled = styled.div`
    position: relative;
    flex-basis: 100%;
    margin: 0 5rem;

    .search_results {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 2;
        width: 100%;
        background-color: white;
        padding: 1rem;
        border: 1px solid #ddd;
    }
`;

/**
 *
 *
 */
const HeaderSearch = (props) => {
    return (
        <HeaderSearchStyled className="header_search">
            <HeaderSearchForm></HeaderSearchForm>
            <div className="search_results">
                <HeaderSearchResult label="Result label 1"></HeaderSearchResult>
                <HeaderSearchResult label="Result label 2"></HeaderSearchResult>
                <HeaderSearchResult label="Result label 3"></HeaderSearchResult>
                <HeaderSearchResult label="Result label 4"></HeaderSearchResult>
            </div>
        </HeaderSearchStyled>
    );
};

export default HeaderSearch;
