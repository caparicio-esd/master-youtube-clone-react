import React from 'react';
import HeaderBrand from './HeaderBrand/HeaderBrand';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import HeaderSearch from './HeaderSearch/HeaderSearch';

const Header = (props) => {
    return (
        <div className="header">
            <HeaderBrand></HeaderBrand>
            <HeaderSearch></HeaderSearch>
            <HeaderNavigation></HeaderNavigation>
        </div>
    );
};

export default Header;
