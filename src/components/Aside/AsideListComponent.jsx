import React from 'react';
import styled from 'styled-components';

/**
 *
 */
const AsideListComponentStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background-color: ${({ active }) => (active ? '#d6d6d6' : '')};

    .aside_list_component_icon {
        width: 30px;
        margin-right: 1rem;
    }
    .aside_list_component_icon svg g {
        fill: ${({ active }) => (active ? '#f44336' : '')};
    }
    .aside_list_component_label {
        flex-basis: 100%;
    }
`;

/**
 *
 */
const AsideListComponent = ({ icon, name, active, swithActiveItemHandler }) => {
    return (
        <AsideListComponentStyled
            className="aside_list_component"
            active={active || false}
            onClick={() => swithActiveItemHandler(name)}
        >
            <div className="aside_list_component_icon">{icon}</div>
            <div className="aside_list_component_label">{name}</div>
        </AsideListComponentStyled>
    );
};

export default AsideListComponent;
