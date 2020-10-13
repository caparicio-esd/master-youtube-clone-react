import React from 'react';
import styled from 'styled-components';

const AsideSuscriptionComponentStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: ${({ active }) => (active ? '#d6d6d6' : '')};

    .aside_list_component_picture {
        width: 50px;
        margin-right: 1rem;
        img {
            width: 100%;
        }
    }
    .aside_list_component_label {
        flex-basis: 100%;
    }
    .aside_suscription_component_status {
        font-size: .5rem;
        color: blue;
    }
`;


const AsideSuscriptionComponent = ({ name, picture, status }) => {
    return (
        <AsideSuscriptionComponentStyled className="aside_list_component">
            <div className="aside_list_component_picture">
                <img src={picture} alt="" />
            </div>
            <div className="aside_list_component_label">{name}</div>
            <div className="aside_suscription_component_status">
                <span className="fa fa-circle"></span>
            </div>
        </AsideSuscriptionComponentStyled>
    );
};

export default AsideSuscriptionComponent;
