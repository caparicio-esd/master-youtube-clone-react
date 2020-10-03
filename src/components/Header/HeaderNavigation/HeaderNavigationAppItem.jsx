import React from 'react';
import styled from 'styled-components';

/**
 *
 */
const HeaderNavigationAppItemStyled = styled.div`
    margin: 0 0.5rem;

    .header_navigation_app_item_toggle {
        width: 25px;
    }
    .header_navigation_app_item_window {
        display: none;
    }
    svg g {
        fill: #666;
    }
`;

/**
 *
 */
const HeaderNavigationAppItem = (props) => {
    return (
        <HeaderNavigationAppItemStyled className="header_navigation_app_item">
            <div className="header_navigation_app_item_toggle">{props.icon}</div>
            <div className="header_navigation_app_item_window">{props.window}</div>
        </HeaderNavigationAppItemStyled>
    );
};

export default HeaderNavigationAppItem;
