import React from 'react';

const AsideListComponent = (props) => {
    return (
        <div className="aside_list_component">
            <div className="aside_list_component_icon">
                <span className={`fa fa-${props.icon}`}></span>
            </div>
            <div className="aside_list_component_label">{props.name}</div>
        </div>
    );
};

export default AsideListComponent;
