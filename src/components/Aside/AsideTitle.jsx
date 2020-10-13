import React from 'react';
import styled from 'styled-components';

const AsideTitleStyled = styled.h3` 
    padding: 0.75rem 1rem;
    text-transform: uppercase;
    margin: 0;
`;


const AsideTitle = (props) => {
    return <AsideTitleStyled className="aside_title">{props.title}</AsideTitleStyled>;
};

export default AsideTitle;
