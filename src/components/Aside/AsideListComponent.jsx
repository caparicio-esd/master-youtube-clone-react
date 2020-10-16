import React from 'react';
import styled from 'styled-components';

/**
 *
 */
const AsideListComponentStyled = styled.div`
    display: ${({showing}) => showing ? 'flex' : 'none'};
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background-color: ${({ active }) => (active ? '#d6d6d6' : '')};

    .aside_list_component_icon {
        width: 30px;
        margin-right: 1rem;
    }
    .aside_list_component_icon svg g {
        fill: ${(props) => (props.active ? '#f44336' : '')};
    }
    .aside_list_component_label {
        flex-basis: 100%;
    }
`;

/**
 *
 */
const AsideListComponent = ({ listInfo }) => {
    return (
        <AsideListComponentStyled
            className="aside_list_component"
            active={listInfo.active || false}
            showing={listInfo.showing}
        >
            <div className="aside_list_component_icon">{listInfo.icon}</div>
            <div className="aside_list_component_label">{listInfo.label}</div>
        </AsideListComponentStyled>
    );
};

export default AsideListComponent;
