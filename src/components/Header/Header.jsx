import React from 'react';
import HeaderBrand from './HeaderBrand/HeaderBrand';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import styled from 'styled-components';

/**
 *
 *
 */
const HeaderStyled = styled.header`
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
    return (
        <HeaderStyled className="header">
            <HeaderBrand></HeaderBrand>
            <HeaderSearch></HeaderSearch>
            <HeaderNavigation></HeaderNavigation>
        </HeaderStyled>
    );
};

export default Header;
