import React from 'react';

const AsideListComponent = ({ icon, name }) => {
    return (
        <div className="aside_list_component">
            <div className="aside_list_component_icon">{icon}</div>
            <div className="aside_list_component_label">{name}</div>
        </div>
    );
};

export default AsideListComponent;
