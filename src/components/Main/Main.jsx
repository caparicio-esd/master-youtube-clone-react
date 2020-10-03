import React from 'react';
import VideoCard from './VideoCard';
import videosData from './videosData.json';
import styled from 'styled-components';

const MainStyled = styled.main`
    grid-area: 2 / 2 / span 1 / span 1;
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
