import React from 'react';
import HeaderBrand from './HeaderBrand/HeaderBrand';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import styled from 'styled-components';

import headerData from './../../api/header';

/**
 *
 *
 */
const HeaderStyled = styled.header`
    grid-area: 1 / 1 / span 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #ddd;
`;

/**
 *
 *
 */
const Header = (props) => {

    console.log(headerData.searchBox);

    return (
        <HeaderStyled className="header">
            <HeaderBrand logo={headerData.logo}></HeaderBrand>
            <HeaderSearch searchInfo={headerData.searchBox} ></HeaderSearch>
            <HeaderNavigation></HeaderNavigation>
        </HeaderStyled>
    );
};

export default Header;
