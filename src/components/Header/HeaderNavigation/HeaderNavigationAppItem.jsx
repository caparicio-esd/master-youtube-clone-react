import React from 'react';

const HeaderNavigationAppItem = (props) => {
    return (
        <div className="header_navigation_app_item">
            <div className="header_navigation_app_item_toggle" style={{ width: '40px' }}>
                {props.icon}
            </div>
            <div className="header_navigation_app_item_window">{props.window}</div>
        </div>
    );
};

export default HeaderNavigationAppItem;
