import React from 'react';

const AsideSuscriptionComponent = ({ name, picture, status }) => {
    return (
        <div className="aside_list_component">
            <div className="aside_list_component_picture">
                <img src={picture} alt="" />
            </div>
            <div className="aside_list_component_label">{name}</div>
            <div className="aside_suscription_component_status">
                <span className="fa fa-circle"></span>
            </div>
        </div>
    );
};

export default AsideSuscriptionComponent;
