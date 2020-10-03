import React from 'react';
import HeaderBrand from './HeaderBrand';

const Header = (props) => {
    return (
        <div className="header">
            <HeaderBrand></HeaderBrand>
            <div className="header_search"></div>
            <div className="header_navigation"></div>
        </div>
    );
};

export default Header;
