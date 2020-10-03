import React from 'react';
import styled from 'styled-components';

/**
 *
 *
 */
const HeaderSearchResultStyled = styled.div`
    display: flex;
    margin-bottom: 0.25rem;

    .search_result_label {
        flex-basis: 100%;
        margin-right: 1rem;
        font-weight: bold;
    }
    .search_result_cta {
    }
    .search_result_cta button {
        background-color: transparent;
        font-size: 0.9rem;
        border: 0;
        padding: 0;
    }
`;

/**
 *
 *
 */
const HeaderSearchResult = (props) => {
    return (
        <HeaderSearchResultStyled className="search_result">
            <div className="search_result_label">{props.label}</div>
            <div className="search_result_cta">
                <button>Quitar</button>
            </div>
        </HeaderSearchResultStyled>
    );
};

export default HeaderSearchResult;
