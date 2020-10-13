import React from 'react';
import VideoCard from './VideoCard';
import videosData from './videosData.json';
import styled from 'styled-components';

const MainStyled = styled.main`
    grid-area: 2 / 2 / span 1 / span 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1.25rem;
    padding: 2rem;
    max-height: 100%;
    overflow: auto;
`;


const Main = () => {
    return (
        <MainStyled className="main">
            {videosData.map((video, i) => (
                <VideoCard key={i} cardContent={video} />
            ))}
        </MainStyled>
    );
};

export default Main;
